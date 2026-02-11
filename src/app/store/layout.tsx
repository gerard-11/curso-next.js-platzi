import React from "react";
import {getCollections} from "app/services/shopify/collections";
import Link from "next/link";
import {ShopifyCollection} from "app/services/shopify/collections";
import styles from './storeLayout.module.sass'

export default async function Layout({ children }:{ children:React.ReactNode }){
    const  collections = await getCollections()
    return (
        <main className={styles.StoreLayout}>
            <nav>
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