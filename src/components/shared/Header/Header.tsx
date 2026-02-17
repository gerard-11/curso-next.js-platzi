import Link from "next/link";
import styles from "./Header.module.sass";
import {validateAccessToken} from "app/utils/auth/validateAccessToken";
import ShoppingCart from "app/components/shared/ShopingCart";


export const Header=async () => {

    const customer= await validateAccessToken()

    return (
        <header className={styles.Header}>
            <nav>
                <ul className={styles.Header__list}>
                            <li >
                            <Link href='/'>
                            Home
                            </Link>
                            </li>
                        <li >
                        <Link href='/store'>
                            Store
                        </Link>
                        </li>
                </ul>
                <div className={styles.Header__user}>
                    {customer?.firstName ? <p>Hola {customer.firstName}</p> : <Link href='/login'>Login</Link>}
                    <ShoppingCart />
                </div>
            </nav>
        </header>
    )
}