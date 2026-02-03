import {NextResponse} from "next/server";
import Image from "next/image";
import styles from './MainProducts.module.scss'

interface Product {
    id: string | number
    title: string;
    images: {
        src: string;
    }[];
}
const getProduct = async () => {
    const url = `https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2026-01/shop.json`;
    console.log("URL FINAL 👉", url);

    const response = await fetch(`https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2026-01/products.json`, {
        headers: new Headers({
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || "",
            "Content-Type": "application/json"
        })
    })
    if (!response.ok) {
        return NextResponse.json(
            {error: "Error al conectar con Shopify"},
            {status: response.status}
        );
    }
    const data = await response.json()
    return data
}


const MainProducts = async () => {
    const response= await getProduct();
   console.log(response)
    return (
        <section className={styles.MainProducts}>
            <h3>Main Products</h3>
            <div className={styles.MainProducts__grid}>
                {response.products.map((product:Product) => {
                   const srcImage=product.images[0]?.src
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