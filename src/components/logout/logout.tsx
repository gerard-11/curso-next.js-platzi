'use client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
    const router = useRouter()

    const handleLogout = async () => {
        await fetch('/api/logout', { method: 'POST' })
        router.refresh()
        router.replace('/')
    }
    return <button onClick={handleLogout}>Cerrar sesión</button>
}