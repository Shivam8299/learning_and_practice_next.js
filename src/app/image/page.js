"use client"
import Image from "next/image";
import cake from "../../../public/cake.webp";
import { useRouter } from "next/navigation";
function page() {
    const router = useRouter()
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-teal-100 to-emerald-100 h-screen">
      <div className=" h-auto flex justify-center items-center rounded-xl p-5 gap-10 mt-10">
        <Image src={cake} height={300} width={300} alt="cake" />
      <div className="relative w-[280px] h-[260px]">
        <Image src={cake} alt="banner" fill/>
      </div>
      </div>
      <button onClick={()=>router.push("/")} className="px-6 py-1 rounded text-white bg-blue-400  w-40 mt-10">Go Back</button>
    </div>
  );
}

export default page;
