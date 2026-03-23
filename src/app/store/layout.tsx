import React from "react";
import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";
import {ShopifyCollection} from "app/services/shopify/collections";
import styles from './storeLayout.module.sass'


export const runtime='edge'

export default async function Layout({ children }:{ children:React.ReactNode }){
    const  collections = await getCollections()
    return (
        <main className={styles.StoreLayout}>
            <nav>
                <div className={styles.StoreLayout__header}>
                    <h2 className={styles.StoreLayout__title}>Categorías</h2>
                    <p className={styles.StoreLayout__subtitle}>Desliza hacia la derecha</p>
                </div>
                <ul className={styles.StoreLayout__list}>{
                collections.map((collection:ShopifyCollection) =>(
                    <Link
                        key={collection.id}
                        href={'/store/'+collection.handle}
                        className={styles.StoreLayout__chip}>
                        {collection.title}
                    </Link>
                ))
            }
                </ul>
            </nav>
            {children}
        </main>
    )
}