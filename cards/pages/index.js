// import Image from "next/image";
// import { Inter } from "next/font/google";
import CardCmp from "./components/card/Card";
// const inter = Inter({ subsets: ["latin"] });
// import data from '@/pages/utils/data.json'
export default function Home() {
  // const {authors , ...others} = data
  console.log(authors);
  return (
    <>
    {/* <div className='flex justify-evenly mt-[2rem]'>
     {authors.map((data)=> (
       ))}
      </div> */}
      {/* data={data} */}
      <CardCmp  />
   
    </>
  );
}
