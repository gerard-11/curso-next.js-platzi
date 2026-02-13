import {MainProducts} from "app/components/home/MainProducts";
import {Loader} from "app/components/shared/Loader";
import React, {Suspense} from "react";
import { Metadata } from 'next'


export const metadata:Metadata={
    title:'Future World',
    description:'Welcome to the Future World',
    keywords:['world']
}
export default function Home() {

  return (
      <>
          <main style={{backgroundColor: 'black'}} >
              <Suspense fallback={<Loader/>}>
                  <MainProducts/>
              </Suspense>
          </main>
      </>

  );
}
