
import { getProduct } from "app/services/shopify";
import Image from "next/image";
import styles from './MainProducts.module.scss'

interface Product {
    id: string | number
    title: string;
    images: {
        src: string;
    }[];
}


const MainProducts = async () => {
    const response= await fetch('http://localhost:3000/api');
  const { products } = await response.json();

    return (
        <section className={styles.MainProducts}>
            <h3>Main Products</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product:Product) => {
                   const srcImage=product.images[0]?.src
                   if(!srcImage)return
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                    <Image key={product.id} src={srcImage} fill alt={product.title} />
                        </article>
                    )
                })}
            </div>
        </section>

    )
}
export { MainProducts }