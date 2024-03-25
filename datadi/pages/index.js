// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import CardCmp from "./components/CardComponent/CardCmp";
import data from "./utils/data.json";
// import { notFound } from "next/navigation";
import { useState } from "react";

export default function Home(props) {
  // const { title, todos } = props;
  // if  (!todos || !Array.isArray(todos)){
  //   return <div>Loading...</div>; // Corrected placement of return statement
  // }
  // const todo = todos.map((todo) => (
  //   <li className="" key={todo.id}>
  //     <p>{todo.title}</p>
  //   </li>
  // ));

  const [dataArr, datSetArr] = useState(data.authors);
  return (
    <div className=" mt-[2rem] px-[50px] ">
      {/* {todo} */}
      {dataArr.map((data) => (
        <CardCmp data={data} key={data}/>
      ))}
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       title: "Hello",
//       todos: data,
//     },
//     // notFound :true,
//       revalidate : 10
    
//   };
// }
// <div>
//   Home Page

//   <p className="text-3xl">
//     Our Coustomers
//   </p>
//   <p className="text-2xl">
//     Go to Coustomers
//   </p>
// </div>

//     ahead of time (aot)
// just in time (jit)
