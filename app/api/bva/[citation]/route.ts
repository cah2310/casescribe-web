import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ citation: string }> }
) {
  const { citation } = await params;

  // Placeholder response — will be connected to Neon PostgreSQL in Phase 6
  return NextResponse.json({
    citation,
    message: "BVA decision API is not yet connected to the database.",
  });
}
