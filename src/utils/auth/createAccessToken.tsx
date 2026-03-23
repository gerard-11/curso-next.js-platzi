import {GraphQLClientSingleton} from "app/graphql";
import {customerAccessTokenCreateMutation} from "app/graphql/mutations/customerAccessTokenCreate";
import {cookies} from "next/headers";

interface CreateAccessTokenResponse {
    success: boolean
    token?: string
    error?: string
}

export const createAccessToken = async (email:string, password:string): Promise<CreateAccessTokenResponse>=>{
    try {
        const cookiesStore=await cookies()
        const graphqlClient=GraphQLClientSingleton.getInstance().getClient()
        const { customerAccessTokenCreate }=await graphqlClient.request(customerAccessTokenCreateMutation,{
            'email':email,
            'password':password
        })

        const accessToken = customerAccessTokenCreate?.customerAccessToken?.accessToken
        const expiresAt = customerAccessTokenCreate?.customerAccessToken?.expiresAt
        const errors = customerAccessTokenCreate?.customerUserErrors

        if(errors && errors.length > 0) {
            return {
                success: false,
                error: errors[0]?.message || 'Error al iniciar sesión'
            }
        }

        if(accessToken){
            cookiesStore.set('accessToken',accessToken,{
                path:'/',
                expires:new Date(expiresAt),
                httpOnly:true,
                sameSite:'strict'
            })

            return {
                success: true,
                token: accessToken
            }
        } else {
            return {
                success: false,
                error: 'No se puede acceder'
            }
        }
    } catch(error: any) {
        console.error('Error creating access token:', error)
        return {
            success: false,
            error: error?.message || 'Error al iniciar sesión'
        }
    }
}