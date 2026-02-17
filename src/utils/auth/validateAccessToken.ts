import {cookies} from "next/headers";
import {GraphQLClientSingleton} from "app/graphql";
import {customerName} from "app/graphql/queries/customerName";

export const validateAccessToken=async ()=>{
    const cookiesStore=await cookies()
    const accessToken=cookiesStore.get('accessToken')?.value;
    const graphqlClient=GraphQLClientSingleton.getInstance().getClient();
    const {customer} = await graphqlClient.request(customerName,{
        customerAccessToken:accessToken,
    })
    return customer;
}