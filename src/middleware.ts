import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode("pprasoon"); 

// Define public routes that bypass the middleware
const publicPaths = ['/', '/login', '/signup'];

export async function middleware(req: NextRequest) {
    
    const path = req.nextUrl.pathname;

    const isPublicPath = publicPaths.some((publicPath) => 
        publicPath === path // Exact match instead of startsWith
    );

   
    if (isPublicPath) {
        return NextResponse.next();
    }

    const token = req.cookies.get("token")?.value;

    
    if (!token) {
        return NextResponse.redirect(
            new URL(`/login?redirect=${path}`, req.url)
        );
    }

    try {
        
        await jwtVerify(token, secret);
        return NextResponse.next();
    } catch (err) {
        console.error("Error in middleware:", err);
        const response = NextResponse.redirect(
            new URL(`/login?redirect=${path}`, req.url)
        );
        response.cookies.delete("token");
        return response;
    }
}

export const config = {
    matcher: [
        /*
         * Match all paths except:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!api|_next/static|_next/image|favicon.ico|public/).*)'
    ]
};