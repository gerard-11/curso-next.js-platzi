import { shopifyUrls } from "app/services/shopify/urls";
import { env } from "app/config/env";

export const getProduct = async () => {
    try{
        const response = await fetch(shopifyUrls.products.all, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || '',
            })
        })
        const data = await response.json()
        return data
    }catch(e){
        console.error(e)
    }
}