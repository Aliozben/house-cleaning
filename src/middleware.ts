import {NextRequest, NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

export const config = {matcher: ["/dashboard", "/api/survey", "/api/register"]};

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/api/survey" && req.method === "POST") {
    return NextResponse.next();
  }

  const session = await getToken({req});
  console.log("session", session);
  if (!session) {
    return Response.json(
      {success: false, message: "authentication failed"},
      {status: 401}
    );
  }
  return NextResponse.next();
}
