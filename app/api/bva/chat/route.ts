import {
  streamText,
  convertToModelMessages,
  stepCountIs,
  type UIMessage,
  type InferUITools,
  type UIDataTypes,
} from "ai";
import { google } from "@ai-sdk/google";
import { bvaTools } from "@/lib/bva/tools";
import { BVA_SYSTEM_PROMPT } from "@/lib/bva/system-prompt";

export const maxDuration = 60;

export type BVAChatTools = InferUITools<typeof bvaTools>;
export type BVAChatMessage = UIMessage<never, UIDataTypes, BVAChatTools>;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: BVAChatMessage[] } = await req.json();

    const result = streamText({
      model: google("gemini-3-flash-preview"),
      system: BVA_SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
      tools: bvaTools,
      stopWhen: stepCountIs(8),
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
