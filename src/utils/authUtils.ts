//simply copy implementations from front end

import axios,{ AxiosError, AxiosResponse } from "axios";
import { SignInResponsePayload, AuthRequestPayloadArgs } from "../AuthTypes.js";

export class AuthInterface{
    private readonly  API_KEY:string=process.env.EXPO_PUBLIC_FIREBASE_API_KEY as string;
    private readonly  generateUrl=({mode}:{mode:'signInWithPassword'|'signUp'})=>{
        return `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${this.API_KEY}`

    }
    login=async ({email,password}:{email:string,password:string}):Promise<AxiosResponse<SignInResponsePayload, AxiosError>> =>{

        return await axios.post(this.generateUrl({mode: 'signInWithPassword'}),{
            email,
            password,
            returnSecureToken:true
            //ask backend to return token; if token is returned, we know that the login was successful
        }as AuthRequestPayloadArgs)
    }

    signup=async ({email,password}:{email:string,password:string})=>{
        return await axios.post(this.generateUrl({mode:'signUp'}),{
            email,
            password,
            returnSecureToken:true
            //ask backend to return token; if token is returned, we know that the login was successful
            }as AuthRequestPayloadArgs)  
    }

}