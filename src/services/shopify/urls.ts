import { env } from 'app/config/env'
export const shopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2026-01/products.json`
    },
    collections:{
        'all':`${env.SHOPIFY_HOSTNAME}//admin/api/2026-01/smart_collections.json?since_id=482865238`,
        'products':(id:string)=>`${env.SHOPIFY_HOSTNAME}///admin/api/2024-01/collections/${id}/products.json`
    }
}



