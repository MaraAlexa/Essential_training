import './App.css'

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
  return (
    <div>
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
    <ul>
      {dishes.map((dish) => (<li  key= {dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>))}
    </ul>
  )
}
export default App
