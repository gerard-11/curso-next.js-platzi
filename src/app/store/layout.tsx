import React from "react";
import {getCollections} from "app/services/shopify/collections";
import Link from "next/link";
import {ShopifyCollection} from "app/services/shopify/collections";

export default async function Layout({ children }:{ children:React.ReactNode }){
    const  collections = await getCollections()
    return (
        <main>
            <nav>{
                collections.map((collection:ShopifyCollection) =>(
                    <Link key={collection.id} href={'/store/'+collection.handle}>
                        {collection.title}
                    </Link>
                ))
            }</nav>
            {children}
        </main>
    )
}