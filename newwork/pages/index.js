
import Button from "./components/button/Button";
import Lists from "./components/list/Lists";
import { useState } from "react";

export default function Home() {
  const [dataOfArray , setDataOfArray] = useState(['be honest' , 'tell truth' ,'never cheat'])
  // let dataOfArray = 
  const addHandler = () => {
    console.log('click working')
    setDataOfArray([...dataOfArray, 'new item added']);
    // setDataOfArray.push([...dataOfArray , 'new items add'])
    console.log('dataOfArray' , dataOfArray)
  }
  return (
    <>
      <h1>
        Welcome to 2nd video practice with Ishaq Bhojani
      </h1>
     {dataOfArray.map((items)=> (
      <Lists data={items} key={items}/>
     ))}
      <h3>
        Oper map ke zariye data display keraya jaraha hai 
      </h3>
      <Button text='click this button to new list' click={addHandler} />
    </>
  );
}
