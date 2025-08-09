import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, name: "fireplay", time: new Date().toISOString() });
}