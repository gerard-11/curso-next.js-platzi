'use client'
import { useRouter } from 'next/navigation'
import {revalidateHeader} from "app/actions";


export default function LogoutButton() {

    const router = useRouter()

    const handleLogout = async () => {
        await fetch('/api/logout', { method: 'POST' })
        await revalidateHeader()
        router.push('/')

    }

    return <button onClick={handleLogout}>Cerrar sesión</button>
}