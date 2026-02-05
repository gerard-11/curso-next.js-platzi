import Link from "next/link";
import style from "./Header.module.scss";

export const Header=() => {

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
                    <Link href='/test'>
                        <li>test</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}