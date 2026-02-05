"use client"
import {useEffect} from "react";

interface ErrorProps{
    error:Error,
    reset:()=>void
}


export default function Error({error,reset}: ErrorProps) {
    useEffect(()=>{
        console.log(error);
    },[])
    return(
        <div>
            <h1>:C</h1>
            <p>Error en la aplicacion</p>
            <button onClick={reset}>reintentar</button>
        </div>

    )
}