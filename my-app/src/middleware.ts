import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifywithJose } from "./app/db/helpers/jwt";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const authorization = cookieStore.get("Authorization");

  if (request.nextUrl.pathname.startsWith("/api/wishlists")) {
    if (!authorization)
      return Response.json(
        {
          message: "You have to login first",
        },
        { status: 401 }
      );
    const [type, token] = authorization?.value.split(" ");

    if (type !== "Bearer")
      return Response.json(
        {
          message: "You have to login first",
        },
        { status: 401 }
      );

    const payload = await verifywithJose<{ email: string; _id: string }>(
      (token)
    )
    
    console.log("Authorization:", authorization);
    console.log("Token:", token);
    console.log("Payload:", payload); 

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", payload._id);

    const response = NextResponse.next({
        request:{
            headers:requestHeaders
        }
    })
    return response
  }
  if(request.nextUrl.pathname.startsWith("/wishlists")){
    if(!authorization){
        return NextResponse.redirect(new URL(`/login`,request.nextUrl))
    }
  }
}


export const config ={
    matcher:["/api/wishlists","/wishlists"],
}
