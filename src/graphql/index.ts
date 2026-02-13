import { GraphQLClient } from 'graphql-request';
import { env } from 'app/config/env';

export class GraphQLClientSingleton {
    private readonly endpoint: string = env.SHOPIFY_GRAPHQL_ENDPOINT;

    private static instance: GraphQLClientSingleton;

    static getInstance(): GraphQLClientSingleton {
        if (!this.instance) {
            this.instance = new GraphQLClientSingleton();
        }
        return this.instance;
    }

    getClient(): GraphQLClient {
        return new GraphQLClient(this.endpoint, {
            headers: {
                'X-Shopify-Storefront-Access-Token':env.SHOPIFY_STOREFRONT_TOKEN,
                "Content-Type": "application/json",
            },
        });
    }
}