import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProduct } from "app/services/shopify/products";
import { getCollectionProducts, getCollections } from "app/services/shopify/collections";

export const runtime = 'edge';

type Collection = {
    id: string;
    handle: string;
};

interface CategoryProps {
    params: {
        categories?: string[];
    };
    searchParams?: string;
}

export default async function Category({ params }: CategoryProps) {
    const { categories } =  await params;//categories es el array de rutas dinamicas
    let products = [];
    console.log('categories param:', categories);
    console.log('categories[0]:', categories?.[0]);
    console.log('type:', typeof categories?.[0]);
    try {
        const collections = await getCollections();

        if (categories?.length && collections.length > 0) {
            const selectedCollection = collections.find(
                (collection: Collection) => collection.handle === categories[0]);

            if (selectedCollection) {
                products = await getCollectionProducts(selectedCollection.id);
            } else {
                console.warn(`Collection "${categories[0]}" not found`);
                products = await getProduct();
            }
        } else {
            products = await getProduct();
        }
    } catch (error) {
        console.error('Error in Category page:', error);
        products = await getProduct();
    }

    return <ProductsWrapper products={products} />;
}