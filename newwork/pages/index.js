
import Button from "./components/button/Button";
import Lists from "./components/list/Lists";


export default function Home() {
  const dataOfArray = ['be honest' , 'tell truth' ,'never cheat']
  return (
    <>
      <h1>
        Welcome to 2nd video practice with Ishaq Bhojani
      </h1>
     {dataOfArray.map((items)=> (
      <Lists data={items}/>
     ))}
      <h3>
        Oper map ke zariye data display keraya jaraha hai 
      </h3>
      <Button text='click this button'/>
    </>
  );
}
