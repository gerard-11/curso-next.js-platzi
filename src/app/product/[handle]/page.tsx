import {getProduct} from "app/services/shopify/products";
import {ProductView} from "app/components/Store/ProductView/ProductView";
import { redirect } from 'next/navigation'

interface ProductPageProps {
    searchParams:Promise<{
        id?:string
    }>
}

export async function generateMetadata({searchParams} : ProductPageProps) {
    const {id}=await searchParams;

    const products=await getProduct(id)

    const product=products[0];

    return{
        title:product.title,
        description:product.description,
        keywords:product.tags,
        openGraph:{
            images:[product.image],
        }
    }
}

export default async function ProductPage({searchParams}: ProductPageProps){
    const {id}=await searchParams;

    const products=await getProduct(id)

    const product=products[0];

    return <ProductView product={product}/>
}