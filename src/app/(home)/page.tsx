
import {MainProducts} from "app/components/home/MainProducts";
import {Loader} from "app/components/shared/Loader";
import React, {Suspense} from "react";


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
