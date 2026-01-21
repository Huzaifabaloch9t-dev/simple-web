import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log("Contact Message:", { name, email, message });

  return NextResponse.json({
    success: true,
    message: "Message sent successfully!",
  });
}
