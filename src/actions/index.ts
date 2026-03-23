"use server"
import {createUserMutation} from "app/graphql/mutations/createUserMutation";
import {createCartMutation} from "app/graphql/mutations/createCartMutation";
import { GraphQLClientSingleton } from "app/graphql";
import {createAccessToken} from "app/utils/auth/createAccessToken";
import {redirect} from "next/navigation";
import {validateAccessToken} from "app/utils/auth/validateAccessToken";
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";




export const handleCreateUser = async (formData:FormData) => {
        const formDataObject=Object.fromEntries(formData)
        delete formDataObject['confirmPassword']
        const graphqlClient=GraphQLClientSingleton.getInstance().getClient()
        const variables= {
                input: {
                        ...formDataObject,
                        phone: '+52' + formDataObject.phone,
                }
        }
        const { customerCreate }= await graphqlClient.request(createUserMutation,variables)
        const { customer, customerUserErrors }= customerCreate

        if(customerUserErrors && customerUserErrors.length > 0){
                const errorMessages = customerUserErrors.map((error: any) => error.message).join(', ')
                throw new Error(errorMessages)
        }

        if(customer?.firstName){
                const tokenResult = await createAccessToken(
                    formDataObject.email as string,
                    formDataObject.password as string
                )
                if(tokenResult.success) {
                        redirect('/store')
                }
        }
}

export const handleLogin = async (formData:FormData) => {
        const formDataObject=Object.fromEntries(formData)
        const result=await createAccessToken(formDataObject.email as string,formDataObject.password as string)

        if(result.success){
                redirect('/store')
        } else {
                return {
                        success: false,
                        error: result.error || 'Error al iniciar sesión'
                }
        }
}


export const handleCreateCart = async (items: CartItem[]):Promise<string | undefined> => {
        const cookiesStore =await cookies()
        const accessToken = cookiesStore.get('accessToken')?.value as string

        if(!accessToken) redirect('/login')

        const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
        const customer = await validateAccessToken()
        const variables = {
                input: {
                        buyerIdentity: {
                                customerAccessToken: accessToken,
                                email: customer?.email
                        },
                        lines: items.map(item => ({
                                merchandiseId: item.merchandiseId,
                                quantity: item.quantity
                        }))
                }
        }
        const { cartCreate }: {
                cartCreate?: {
                        cart?: {
                                checkoutUrl: string
                        }
                }
        } = await graphqlClient.request(createCartMutation, variables)
        console.log('cartCreate',cartCreate)

        return cartCreate?.cart?.checkoutUrl
}

export async function revalidateHeader() {
        "use server";
        revalidatePath("/", "layout");
}