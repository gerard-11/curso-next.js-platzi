
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function POST() {
    const cookiesStore = await cookies()
   cookiesStore.delete({ name: 'accessToken', path: '/' })

    revalidatePath('/')
    revalidatePath('/store')
    revalidatePath('/my-account')

    return Response.json({ ok: true })
}