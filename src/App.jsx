import { useState } from 'react';
import './App.css'
import chef from "./images/chef.png";

function Header ({name, year}){
  return (
    <header>
      <h1> {name}'s' kitchen</h1>
      <p> Copyright {year}</p>
    </header>
  )
}

let language = "javascript";
let moon = "🌙";

function App() {
  // you set an initial state with useState("open")
  // create a status variable and a function setStatus that updates that state
  const [ status, setStatus ] = useState("open");
  console.log(status);
  return (
    <div>
      <h1>The restaurant is currently {status}</h1>
      <button onClick={() => setStatus("closed")} style={{ backgroundColor: "white", color: "black" }}>Close Restaurant</button>
      <Header name="Mara" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
    
  )
}

const items = [
  "Macaroni and Cheese",
  "Salmon with brocolli"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}))

function Main({dishes}){
  return (
    <>
      <div>
      <h2>A wonderful new restaurant </h2>
      </div>
      <main>
        <img src={chef} height={400} alt="a smilling chef owner" />
        <ul>
        {dishes.map((dish) => (<li  key= {dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>))}
         </ul>
       </main>
    </>
    
    
  )
}
export default App
