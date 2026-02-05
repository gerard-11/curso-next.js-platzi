import {getProduct} from "app/services/shopify";

export async function GET(){
    const { products } =await getProduct()
    return Response.json({products})
}