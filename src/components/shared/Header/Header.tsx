import Link from "next/link";
import style from "./Header.module.scss";
import {cookies} from "next/headers";

export const Header=async () => {

    const cookiesStore=await cookies()
    const token= cookiesStore.get('accessToken')?.value

    return (
        <header>
            <nav>
                <ul  className={style.ul}>
                    <Link href='/'>
                        <li >Home</li>
                    </Link>
                    <Link href='/store'>
                        <li>store</li>
                    </Link>
                </ul>
                {token ? <p>Hola usuario registrado</p> : <Link href='/login'>Login</Link>}
            </nav>
        </header>
    )
}