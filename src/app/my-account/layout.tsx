import styles from './myAccount.module.sass'
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
interface MyAccountLayoutProps {
    children: React.ReactNode;
    ordersInfo: React.ReactNode;
    userInfo: React.ReactNode;
}

export default async function MyAccountLayout(props: MyAccountLayoutProps) {
    const cookiesStore= await cookies()
    const token = cookiesStore.get('accessToken')?.value
    if (!token) {
        redirect('/')
    }
    return (
        <div className={styles.MyAccount}>
            {props.children}
            <main className={styles.MyAccount__panels}>
                {props.userInfo}
                {props.ordersInfo}
            </main>
        </div>
    );
}