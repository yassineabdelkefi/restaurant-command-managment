import {Routes,Route} from "react-router-dom";
import { useState } from "react";
import Authentification from "./routes/Authentification.jsx";
import DashBoard from "./routes/DashBoard.jsx";
import Dashparams from "./routes/DashParams.jsx";
import Command from "./routes/Commande.jsx";
const App=()=>{
const [commande,setCommand]=useState([])
const [amount,setAmount]=useState(0)


const getCommand=(e)=>{
    setCommand(e)
}
const getAmount=(e)=>{
    setAmount(e)
}

return(
<Routes>
<Route exact path="/"  index element={< Authentification  />} />
<Route exact path="/home" element={<DashBoard  cmd={getCommand} am={getAmount}/>}/>
<Route exact path="/home/params" element={<Dashparams />}></Route>
<Route exact path="/commande" element={<Command data={commande} cmd={getCommand} amount={amount}  am={getAmount}/>}></Route>
<Route></Route>
</Routes>
)
}
export default App