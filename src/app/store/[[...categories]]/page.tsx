import {ProductsWrapper} from "app/components/Store/ProductsWrapper";
import {getProduct} from "app/services/shopify";

interface CategoryProps{
    params: Promise<{
        categories:string[],

    }>,
    searchParams:Promise<{
        socialmedia:string[]
    }>

}

export default async function Category(props:CategoryProps){
    const { products } = await getProduct()



    return (
      <ProductsWrapper products={products}/>
    )
}