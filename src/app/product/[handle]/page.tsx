import {getProduct} from "app/services/shopify/products";
import {ProductView} from "app/components/Store/ProductView/ProductView";

interface ProductPageProps {
    searchParams:{
        id:string
    }
}

export default async function ProductPage({searchParams}: ProductPageProps){
  const id=searchParams.id;
  const products=await getProduct(id)
       const product= products[0];
  console.log('product',product.image)
    return <ProductView product={product}/>
}