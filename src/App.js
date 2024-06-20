import Users from "./Users";
import Login from "./Login";
export function Introduction (){
  return(
    <h1>We are Adalab</h1>

    
  )
}

function App (){
return(
  <div>
     { <Login/> }
     <Users/>

  </div>




)
}
export default App;

