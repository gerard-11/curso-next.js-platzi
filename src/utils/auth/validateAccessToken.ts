import { GraphQLClient } from 'graphql-request';
import {customerName} from "app/graphql/queries/customerName";
import {cookies} from "next/headers";
import {env} from "app/config/env";

export const validateAccessToken = async () => {

    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get('accessToken')?.value;

    if (!accessToken) return null;

    const client = new GraphQLClient(env.SHOPIFY_GRAPHQL_ENDPOINT!, {
        headers: {
            'X-Shopify-Storefront-Access-Token': env.SHOPIFY_STOREFRONT_TOKEN!,
        },
        fetch: (url, options) =>
            fetch(url, { ...options,
                cache: "no-store"
            })
    });

    const { customer } = await client.request(customerName, {
        customerAccessToken: accessToken,
    });

    return customer;
};