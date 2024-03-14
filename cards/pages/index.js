// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// import data from '@/pages/utils/data.json'
// const {authors , ...others} = data
{/* <div className='flex justify-evenly mt-[2rem]'>
 {authors.map((data)=> (
   ))}
  </div> */}
  {/* data={data} */}
import {CardCmp} from "@/pages/components/CardComponent/CardCmp";


export default function Home() {
  console.log(authors);
  return (
    <>
      <CardCmp  />
   
    </>
  );
}
