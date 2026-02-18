import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import {cookies} from "next/headers";


export const config = {
    matcher:[
        '/login/:path*',
        '/signup/:path*',
    ]
}
export default async function proxy(req: NextRequest) {
    const cookiesStore=await cookies()
    const accessToken=cookiesStore.get('accessToken')?.value

    if(accessToken) return NextResponse.redirect(new URL('/store', req.url))
}