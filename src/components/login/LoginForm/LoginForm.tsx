"use client"
import styles from "./LoginForm.module.sass";
import { handleLogin } from "app/actions";
import Link from "next/link";
import { useActionState } from "react";

const loginAction = async (prevState: any, formData: FormData) => {
    return await handleLogin(formData)
}

export const LoginForm = () => {
    const [state, formAction, isPending] = useActionState(loginAction, {
        success: true,
        error: ''
    })

    return (
        <div className={styles.NewAccountForm}>
            <h1 className={styles.NewAccountForm__title}>Login</h1>

            {state?.error && (
                <div className={styles.NewAccountForm__error}>
                    <p>{state.error}</p>
                    <p>
                        ¿No tienes cuenta?
                        <Link href="/signup" className={styles.NewAccountForm__link}>
                            Crear cuenta nueva
                        </Link>
                    </p>
                </div>
            )}

            <form action={formAction} className={styles.NewAccountForm__form}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                />
                <input
                    type="submit"
                    name="submit"
                    value={isPending ? "Iniciando sesión..." : "Login"}
                    disabled={isPending}
                />
            </form>
        </div>
    );
}