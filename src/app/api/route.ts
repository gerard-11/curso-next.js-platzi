import {getProduct} from "app/services/shopify/products";


export async function GET(){
    const  transformedProducts =await getProduct()

    return Response.json({transformedProducts})
}