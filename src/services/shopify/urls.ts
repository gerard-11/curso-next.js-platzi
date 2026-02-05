import { env } from 'app/config/env'
export const shopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2026-01/products.json`
    }
}