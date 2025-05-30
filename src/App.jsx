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
  const [ status, setStatus ] = useState(true);
  console.log(status);
  return (
    <div>
      <h1>The restaurant is currently {" "} {status ? "open" : "closed"}</h1>
      <button onClick={() => setStatus(!status)} style={{ backgroundColor: "white", color: "black" }}>{status ? "close" : "open"} Restaurant</button>
      <Header name="Mara" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={setStatus} />
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

function Main({dishes, openStatus, onStatus}){
  return (
    <>
      <div>
        <p>This button calls the function setStatus that is being passed down to Main via props with the variable onStatus</p>
        <button onClick={() => onStatus(true)}>I am a child componenet changing the state to the entire tree to open(true)</button>
      <h2>A wonderful new restaurant { openStatus ? "Open" : "Closed"}</h2>
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
