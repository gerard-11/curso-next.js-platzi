'use client'
import Image from 'next/image';
import {ErrorPageProps} from "app/app/types";
import styles from 'app/sass/global-error.module.sass'

export default function GlobalError({reset}:ErrorPageProps){
    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
            <Image src='/images/404.png' alt='imagen de error' width={500} height={500}/>
            <p>Al parecer ha ocurrido un error pero no te sientas mal estamos trabajando en ello</p>
            <button onClick={reset}>volver a intentar</button>
        </main>
    )
}