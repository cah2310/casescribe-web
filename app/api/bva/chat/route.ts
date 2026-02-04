import {
  streamText,
  convertToModelMessages,
  stepCountIs,
  type UIMessage,
  type InferUITools,
  type UIDataTypes,
} from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { bvaTools } from "@/lib/bva/tools";
import { BVA_SYSTEM_PROMPT } from "@/lib/bva/system-prompt";
import { fetchFilterContext } from "@/lib/bva/filter-context";

export const maxDuration = 60;

export type BVAChatTools = InferUITools<typeof bvaTools>;
export type BVAChatMessage = UIMessage<never, UIDataTypes, BVAChatTools>;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: BVAChatMessage[] } = await req.json();

    const filterContext = await fetchFilterContext();

    const result = streamText({
      model: anthropic("claude-haiku-4-5-20251001"),
      system: BVA_SYSTEM_PROMPT + filterContext,
      messages: await convertToModelMessages(messages),
      tools: bvaTools,
      stopWhen: stepCountIs(15),
      onStepFinish: (step) => {
        console.log(`[BVA] Step: tools=${step.toolCalls?.length || 0}, text=${step.text?.length || 0} chars, reason=${step.finishReason}`);
      },
      onFinish: (event) => {
        console.log(`[BVA] Stream finished: steps=${event.steps?.length || 0}, reason=${event.finishReason}, text=${event.text?.length || 0} chars`);
      },
      onError: (error) => {
        console.error(`[BVA] Stream error:`, error);
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("BVA chat error:", error);
    return new Response(
      JSON.stringify({ error: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
