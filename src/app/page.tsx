import Image from "next/image";
import Hero from "./component/hero";
import Footer from "./component/footer";


export default function Home() {
  return (<div className="stripe-pattern h-screen w-full">
    <Hero />
   <Footer />
  </div>

    );
}
