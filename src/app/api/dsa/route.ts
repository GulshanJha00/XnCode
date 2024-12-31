import { NextResponse } from "next/server";

export async function GET() {
  const data = { value: 10 }; // Your desired value or logic
  return NextResponse.json(data, { status: 200 });
}
