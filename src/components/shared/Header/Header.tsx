import Link from "next/link";
import style from "./Header.module.scss";
import {validateAccessToke} from "app/utils/auth/validateAccessToken";

export const Header=async () => {

    const customer= await validateAccessToke()

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
                {customer?.firstName ? <p>Hola {customer.firstName}</p> : <Link href='/login'>Login</Link>}
            </nav>
        </header>
    )
}