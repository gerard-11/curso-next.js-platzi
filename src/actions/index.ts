"use server"
import {createUserMutation} from "app/graphql/mutations/createUserMutation";
import { GraphQLClientSingleton } from "app/graphql";
import {createAccessToken} from "app/utils/auth/createAccessToken";
import {redirect} from "next/navigation";



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
        const {  customer }= customerCreate
        console.log("customerCreate:", customerCreate)
        console.log("customer:", customer)
        console.log("errors:", customerCreate.customerUserErrors)

        if(customer?.firstName){
                console.log("antes de createAccessToken")
                await createAccessToken(
                    formDataObject.email as string,
                    formDataObject.password as string
                )
                console.log("antes de redirect");
                redirect('/store')
        }
}

export const handleLogin = async (formData:FormData) => {
        const formDataObject=Object.fromEntries(formData)
        const accessToken=await createAccessToken(formDataObject.email as string,formDataObject.password as string)

        if(accessToken){
                redirect('/store')
        }
}