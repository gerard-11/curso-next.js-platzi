import {Description} from "app/components/home/Description";
import {Hero} from "app/components/home/Hero";
import {MainProducts} from "app/components/home/MainProducts";

export default function Home() {

  return (
      <main style={{backgroundColor: 'black'}} >
          <Hero/>
          <Description/>
          <MainProducts/>
      </main>
  );
}
