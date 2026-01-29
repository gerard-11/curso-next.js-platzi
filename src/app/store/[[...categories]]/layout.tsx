import React from "react";

export default function Layout({ children }:{ children:React.ReactNode }){
    return (
        <main>
            <nav>Navegacion de categorias</nav>
            {children}
        </main>
    )
}