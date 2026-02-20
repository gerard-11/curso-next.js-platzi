import { shopifyUrls } from "app/services/shopify/urls";
import { env } from "app/config/env";

export interface ShopifyCollection {
    id: number;
    title: string;
    handle:string;
}

export const getCollections = async () => {
    try{
        const response = await fetch(shopifyUrls.collections.all, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || '',
            })
        })
        const { smart_collections } = await response.json()
        const transformedCollections = smart_collections.map((collection:ShopifyCollection) => ({
            id: collection.id,
            title: collection.title,
            handle: collection.handle,
        }))
        return transformedCollections
    }catch(e){
        console.error('error fetching collections', e)
        return []
    }
}

export const getCollectionProducts = async (id: string) => {
    try{
        const response= await fetch(shopifyUrls.collections.products(id),{
            headers: {
                "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || '',
            }
        })
        const { products } = await response.json()
        return products
    }catch(e){
        console.error(e)
        return []
    }
}