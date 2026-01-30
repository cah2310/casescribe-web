import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  // Placeholder response — will be connected to Neon PostgreSQL in Phase 6
  return NextResponse.json({
    query,
    total: 0,
    results: [],
    message: "BVA search API is not yet connected to the database.",
  });
}
