// app/api/logout/route.ts
import { cookies } from 'next/headers'

export async function POST() {
    const cookieStore =await  cookies()

    cookieStore.delete({
        name: 'accessToken',
        path: '/', // 🔴 CLAVE
    })

    return Response.json({ ok: true })
}