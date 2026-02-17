import {getProduct} from "app/services/shopify/products";


export async function GET(){
    const { products }=await getProduct()

    return Response.json({products})
}