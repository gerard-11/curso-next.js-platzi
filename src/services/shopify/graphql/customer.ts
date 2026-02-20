import {GraphQLClientSingleton} from "app/graphql";
import {getOrdersQuery} from "app/graphql/queries/getOrders";
import {cookies} from "next/headers";

export const getCustomerOrders=async()=>{
    const cookiesStore= await cookies()
    const accessToken=  cookiesStore.get('accessToken')?.value
    if(!accessToken)return null
    const graphqlClient=GraphQLClientSingleton.getInstance().getClient()
    const variables={
        customerAccessToken:accessToken
    }

    const {customer }= await graphqlClient.request(getOrdersQuery, variables )
    const orders= customer?.orders?.edges.map((edge:any)=> edge.node)

    return{
        totalOrders:customer?.orders?.totalCount,
        orders

    }
}