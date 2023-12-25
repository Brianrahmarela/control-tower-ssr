import { isLogin } from "./utlis/session";
import { NextResponse, NextRequest } from "next/server";
import Cookies from 'js-cookie';

// const protectedRoutes = ["/clientside", "/middlewareside"]
// const protectedRoutes = ['/','/:path*', "/clientside", "/middlewareside"]
const protectedRoutes = ['/','/:path*', "/middlewareside"]

export default function middleware(req){

    const isLoginCookie = req.cookies.get('is_login');
    const valIsLoginCookie = isLoginCookie?.value

    console.log('valIsLoginCookie', valIsLoginCookie)

    
    if(!isLogin && protectedRoutes.includes(req.nextUrl.pathname)){
        const absoluteURL = new URL("/login", req.nextUrl.origin)
        console.log('absoluteURL', absoluteURL)
        return NextResponse.redirect(absoluteURL.toString())
    } 
    // if(valIsLoginCookie && protectedRoutes.includes(req.nextUrl.pathname)){
    //     const absoluteURL2 = new URL("/", req.nextUrl.origin)
    //     console.log('absoluteURL2', absoluteURL2)
    //     return NextResponse.redirect(absoluteURL2.toString())

    // }
    // return res;
    
}