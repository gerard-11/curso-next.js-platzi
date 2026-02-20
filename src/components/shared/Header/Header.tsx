export const dynamic = 'force-dynamic'
import Link from "next/link";
import styles from "./Header.module.sass";
import {validateAccessToken} from "app/utils/auth/validateAccessToken";
import ShoppingCart from "app/components/shared/ShopingCart";
import LogoutButton from "app/components/logout/logout";
import {cookies} from "next/headers";
import {unstable_noStore} from "next/cache";




export const Header=async () => {
    console.log('HEADER RENDER')

    const cookiesStore= await cookies()
    const token= cookiesStore.get('accessToken');
    let customer=null
    if (token) {
        customer = await validateAccessToken()
    }
    const isLoggedIn = !!customer
    console.log('USER TOKEN:', token)

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
                <div  key={customer ? "auth" : "guest"}  className={styles.Header__user}>
                    {!customer&&(
                        <Link href='/signup'>
                            Signup
                        </Link>
                    )}
                    { isLoggedIn?
                        <div>
                            <Link href='/my-account'>
                                <p>Hola {customer?.firstName}</p>
                            </Link>
                            <LogoutButton/>
                        </div>
                            : <Link href='/login'>
                            Login
                            </Link>
                    }

                    <ShoppingCart />
                </div>
            </nav>
        </header>
    )
}