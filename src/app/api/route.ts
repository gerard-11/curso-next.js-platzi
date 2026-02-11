import {getProduct} from "app/services/shopify/products";

export async function GET(){
    const { products } =await getProduct()
    console.log({products})
    return Response.json({products})
}