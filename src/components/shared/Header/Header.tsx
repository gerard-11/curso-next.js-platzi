import Link from "next/link";
import styles from "./Header.module.sass";
import {validateAccessToken} from "app/utils/auth/validateAccessToken";
import ShoppingCart from "app/components/shared/ShopingCart";
import LogoutButton from "app/components/logout/logout";
import {cookies} from "next/headers";
import {unstable_noStore} from "next/cache";


export const Header=async () => {
    unstable_noStore()
    const customer= await validateAccessToken()
    const cookiesStore= await cookies()
    const token= cookiesStore.get('accessToken');
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
                    {!customer&&(
                        <Link href='/signup'>
                            Signup
                        </Link>
                    )}
                    { token&&customer?.firstName?
                        <div>
                            <Link href='/my-account'>
                                <p>Hola {customer.firstName}</p>
                            </Link>
                            <LogoutButton/>
                        </div>
                            : <Link href='/login'>Login</Link>}

                    <ShoppingCart />
                </div>
            </nav>
        </header>
    )
}