import Banner from "@/components/_banner/banner";
import Centro from "@/components/_body/centro";
import Mogilar from "@/components/_body/mogilar";
import Footer from "@/components/_footer/Footer";
import Header from "@/components/_header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col relative gap-2">
      <div className="flex justify-center items-center">
        <Header />
      </div>
      <div>
        {/* <Banner /> */}
      </div>

      <div className="flex flex-col gap-2">
        <Centro />
        <Mogilar />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
