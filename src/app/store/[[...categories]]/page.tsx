import {ProductsWrapper} from "app/components/Store/ProductsWrapper";
import {getProduct} from "app/services/shopify/products";
import {getCollectionProducts, getCollections} from "app/services/shopify/collections";


type Collection = {
    id: string
    handle: string
}
interface CategoryProps{
    params: {
        categories?:string[],
    },
    searchParams?:string
}

export default async function Category({params}:CategoryProps){
    const { categories } = params
    let products=[]
    const collections = await getCollections()


    if(categories?.length){
        const selectedCollectionId=collections.find((collection:Collection)=>
            collection.handle === categories[0]
        )
        products = await getCollectionProducts(selectedCollectionId.id)
    }else{
        products = await getProduct()
    }

    return (
      <ProductsWrapper products={products}/>
    )
}