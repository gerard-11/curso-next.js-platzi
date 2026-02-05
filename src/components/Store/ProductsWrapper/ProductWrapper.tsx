import { ProductCard } from "../ProductCard"
import styles from './ProductWrapper.module.sass'


type ProductType = {
    id: string;
    title: string;
    description: string;
    price:number
    image: string;
    quantity: number;
    handle: string;
    tags: string;
};
interface ProductsWrapperProps {
    products: ProductType[]
}

export const  ProductsWrapper = ({ products }: ProductsWrapperProps) => {

    return (
        <div className={styles.ProductsWrapper}>
            {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}