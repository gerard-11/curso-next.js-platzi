import {Description} from "app/components/home/Description";
import {Hero} from "app/components/home/Hero";
import React from "react";

export default function HomeLayout({children}:{children:React.ReactNode}) {
    return(
        <div>
            <Hero/>
            <Description/>
            {children}
        </div>

)
}


