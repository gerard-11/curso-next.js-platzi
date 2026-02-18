import { GraphQLClient } from 'graphql-request';
import { env } from 'app/config/env';

export class GraphQLClientSingleton {
    private readonly endpoint: string
    private readonly token: string

    private static instance: GraphQLClientSingleton

    private constructor() {
        if (!env.SHOPIFY_GRAPHQL_ENDPOINT) {
            throw new Error('SHOPIFY_GRAPHQL_ENDPOINT is not defined')
        }

        if (!env.SHOPIFY_STOREFRONT_TOKEN) {
            throw new Error('SHOPIFY_STOREFRONT_TOKEN is not defined')
        }

        this.endpoint = env.SHOPIFY_GRAPHQL_ENDPOINT
        this.token = env.SHOPIFY_STOREFRONT_TOKEN
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new GraphQLClientSingleton()
        }
        return this.instance
    }

    getClient(): GraphQLClient {
        return new GraphQLClient(this.endpoint, {
            headers: {
                'X-Shopify-Storefront-Access-Token': this.token,
                'Content-Type': 'application/json',
            },
        })
    }
}
