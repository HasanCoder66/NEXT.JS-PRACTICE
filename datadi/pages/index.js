// import Image from "next/image";
// import { Inter } from "next/font/google";
import { useState } from "react";
import CardCmp from "./components/CardComponent/CardCmp";
import data from "./utils/data.json";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dataArr, datSetArr] = useState(data.authors);
  return (
    <div>
      Home Page

      <p className="text-3xl">
        Our Coustomers
      </p>
      <p className="text-2xl">
        Go to Coustomers
      </p>
    </div>
    // <div className="flex justify-between flex-wrap mt-[2rem] px-[50px] ">
    //   {dataArr.map((data) => (
    //     <CardCmp data={data} />
    //   ))}
    // </div>
  );
}
