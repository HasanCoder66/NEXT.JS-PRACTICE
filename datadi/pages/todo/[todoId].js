// import { notFound } from "next/navigation";
import { useState } from "react";

export default function Home(props) {
  const {  todo } = props;
//   if  (!todo ){
//     return <div>Loading...</div>; // Corrected placement of return statement
//   }
 

  // const [dataArr, datSetArr] = useState(data.authors);
  return (
    <div className=" mt-[2rem] px-[50px] ">
     <h1>
        Todo Details Page
     </h1>
      {todo?.title}
    </div>
  );
}

export async function getStaticProps({params}) {
    const {todoId} = params
    console.log(todoId);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      todo: data,
    },
    // notFound :true,
      revalidate : 10
    
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          todoId: '1',
        },
      }, // See the "paths" section below
    ],
    fallback: 'blocking', // false or "blocking"
  }
}