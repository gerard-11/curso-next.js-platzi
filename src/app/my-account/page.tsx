import styles from './myAccount.module.sass'
export default async function MyAccountPage() {

    return (
        <div>
            <div>
                <h1 className={styles.MyAccount__title}>
                    My account
                </h1>
            </div>
        </div>
    )
}