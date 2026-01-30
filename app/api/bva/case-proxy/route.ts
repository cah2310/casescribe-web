import { NextRequest, NextResponse } from "next/server";

const BVA_API_URL = process.env.BVA_API_URL || "http://localhost:8000";

export async function GET(req: NextRequest) {
  const caseId = req.nextUrl.searchParams.get("case_id");
  if (!caseId) {
    return NextResponse.json({ error: "case_id required" }, { status: 400 });
  }

  const res = await fetch(
    `${BVA_API_URL}/api/cases/${encodeURIComponent(caseId)}`,
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: `Upstream error: ${res.status}` },
      { status: res.status },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
