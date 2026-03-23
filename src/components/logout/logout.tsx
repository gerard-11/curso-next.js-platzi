'use client'
import { useRouter } from 'next/navigation'
import {revalidateHeader} from "app/actions";
import {useState} from "react";


export default function LogoutButton() {
    const [hover, setHover] = useState(false);
    const router = useRouter()

    const handleLogout = async () => {
        await fetch('/api/logout', { method: 'POST' })
        await revalidateHeader()
        router.push('/')

    }

    return <button
        style={{
            borderRadius:"2px ",
            backgroundColor: hover ? "white" : "#2e026d",
            color: hover? 'black ':'white', cursor:"pointer",
            border: "none",
            padding: 2,
            textDecoration: "underline",
            margin: 0,
    }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleLogout}>
        Cerrar sesión
           </button>
}