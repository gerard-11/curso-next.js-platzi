import {cookies} from "next/headers";
import {GraphQLClientSingleton} from "app/graphql";
import {customerName} from "app/graphql/queries/customerName";

export const validateAccessToken=async ()=>{
    const cookiesStore=await cookies()
    const accessToken=cookiesStore.get('accessToken')?.value;

    if (!accessToken) {
        return null;
    }
    const graphqlClient=GraphQLClientSingleton.getInstance().getClient();
    try{
        const { customer } = await graphqlClient.request(customerName,{
            customerAccessToken:accessToken,
        })
        return customer;
    }catch(err){
        console.error('invalid access token',err);
        return null
    }
}