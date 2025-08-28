import Image from "next/image";
import cake from "../../../public/cake.webp";

function page() {
  return (
    <div className="v h-screen flex justify-center items-center gap-10">
      <Image src={cake} height={300} width={300} alt="cake" />
      <div className="relative w-[300px] h-[300px]">
        <Image src={cake} alt="banner" fill/>
      </div>
    </div>
  );
}

export default page;
