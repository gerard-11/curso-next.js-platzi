import { ProductCard } from "../ProductCard"
import styles from './ProductWrapper.module.sass'
import { ProductType } from 'app/components/Store/types/product'


interface ProductsWrapperProps {
    products: ProductType[]
}

export const  ProductsWrapper = ({ products }: ProductsWrapperProps) => {

    return (
        <div className={styles.ProductsWrapper}>
            {products?.map((product) => {
                if (!product.image?.trim()) return null
               return(<ProductCard key={product.id} product={product} />)
            })}
        </div>
    )
}