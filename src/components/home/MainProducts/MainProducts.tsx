
import { getProduct } from "app/services/shopify/products";
import Image from "next/image";
import styles from './MainProducts.module.scss'
import {ProductType} from "app/components/Store/types/product";


const MainProducts = async () => {
    const products= await getProduct();


    return (
        <section className={styles.MainProducts}>
            <h3>Main Products</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product:ProductType) => {
                    if (!product.image) return null
                    const src=product.image
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                    <Image key={product.id} src={src} fill alt={product.title} />
                        </article>
                    )
                })}
            </div>
        </section>

    )
}
export { MainProducts }