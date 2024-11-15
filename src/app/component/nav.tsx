import Image from "next/image"
export default function Nav(){
    return(
        <div className=" absolute top-0 left-0 right-0 flex p-4 items-center justify-around">
<div> <h1 className="text-white font-bold text-2xl">Panto</h1> </div>
           <div>
            <Image src="/images/nav.png" width={500} height={500} alt="nav" className=" p-3"/>
            </div>
            <div className="flex justify-between ">
                <Image src="/images/Bag.png" width={30} height={30} alt="bag"  />

                <Image src="/images/Group.png" width={20} height={20} alt="bag"  />
            </div>
        </div>
    )
}