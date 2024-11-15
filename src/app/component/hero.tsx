import Image from "next/image";
import Nav from "./nav";
import Chairs from "./Chairs";
import Reviews from "./reviews";

export default function Hero() {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/background.png)" }}
      >
        {/* Stripe Pattern Overlay */}
        <div className="stripe-pattern"></div>

        {/* Content Layer */}
        <div className="relative z-20">
          <Nav />
          <div className="text-white items-center text-center p-32">
            <h1 className="text-5xl font-bold text-center text-stripes">
              Make your interior More
              <br />
              Minimalistic & Modern
            </h1>
            <p className="p-3">
              Turn your room with panto into a lot more minimalist
              <br />
              and modern with ease and speed.
            </p>
            <div className="flex justify-center items-center p-6">
              <Image src="/images/search.png" width={250} height={250} alt="search" />
            </div>
          </div>
        </div>
      </div>

      {/* Section for "Why Choosing Us" */}
      <div className="flex stripe-pattern">
        <ul className="flex justify-between gap-8 shadow-2xl p-24">
          <li className="text-black text-3xl font-bold">
            Why <br /> Choosing Us
          </li>
          <li className="text-xl font-bold">
            Luxury facilities
            <p className="text-black font-sans font-light text-lg">
              The advantage of hiring a workspace <br />
              with us is that gives you comfortable <br />
              service and all-around facilities.
            </p>
            <Image src="/images/more.png" width={150} height={150} alt="more" />
          </li>
          <li className="text-xl font-bold">
            Affordable Price
            <p className="text-black font-sans font-light text-lg">
              You can get a workspace of the highest <br />
              quality at an affordable price and still <br />
              enjoy the facilities that are only here.
            </p>
            <Image src="/images/more.png" width={150} height={150} alt="more" />
          </li>
          <li className="text-xl font-bold">
            Many Choices
            <p className="text-black font-sans font-light text-lg">
              We provide many unique work space <br />
              choices so that you can choose the <br />
              workspace to your liking.
            </p>
            <Image src="/images/more.png" width={150} height={150} alt="more" />
          </li>
      
        </ul>

      </div>
{/* Best Selling Product Section */}
<div className="stripe-pattern items-center shadow-lg p-8 rounded-lg">
  <p className="flex justify-center text-3xl font-bold items-center">
    Best Selling Product
  </p>
  
  <div className="flex justify-center items-center p-5">
    <Image
      src="/images/button.png"
      width={300}
      height={300}
      alt="button"
      className="mx-auto"
    />
  </div>
  
  {/* Chair Cards Section */}
  <Chairs />
  
  <div className="flex justify-center">
    <Image src="/images/view.png" width={120} height={120} alt="view" />
  </div>

<div className="flex justify-between">
<Image src="/images/left.png" width={80} height={80} alt="left" />
<Image src="/images/right.png" width={80} height={80} alt="right" />
</div>
</div>


<div >
<ul className="flex justify-between p-10 stripe-pattern">
  <li >
<Image src="/images/group4.png" width={600} height={600} alt="group4"/>
</li>

<li className="text-orange-600 ">EXPERIENCES
  <p className="text-black text-2xl font-bold py-4">We Provide You The <br /> Best Experience</p>
  <p className="text-black font-light">You don’t have to worry about the result because all of these <br /> interiors are made by people who are professionals in their fields <br /> with an elegant and lucurious style and with premium quality <br /> materials</p>
  <Image src="/images/more.png" width={150} height={150} alt="more" />
</li>
</ul>
</div>

<div className="py-36 stripe-pattern">
  <ul className="flex justify-end gap-5">
    <li className="text-orange-600 ">MATERIALS
     <p className="text-2xl text-black font-bold">Very Serious <br /> Materials For Making <br /> Furniture</p>
    <p className="text-black font-light">Because panto was very serious about designing furniture for our <br /> environment, using a very expensive and famous capital but at a <br /> relatively low price</p>
    </li>
    <li>
      <Image src="/images/group1.png" width={250} height={250} alt="group1" />
      <Image src="/images/group2.png" width={250} height={250} alt="group2" />
    </li>
    <li>
    <Image src="/images/group3.png" width={500} height={500} alt="group3" />
    
    </li>
  </ul>

<Reviews />

</div>








      </div>
   
  );
}
