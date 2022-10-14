import { useState,useEffect } from "react";
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios'

const DashBoard=(props)=>{
 const {cmd,am}=props
 const [command,setCommand]=useState([])
 const [data,setData]=useState([])
 const [check,setChec]=useState(false)
 const[amount,setAmount]=useState(0)


 const navigate = useNavigate();
const navigateTodash = () => {
    
    navigate('/commande');
  };

 const addToChart=(element)=>{
    setCommand(element)
 }
 cmd(command)

 useEffect(()=>{axios.get(`http://localhost:3000/api/restorant/${localStorage.id}`).then((resp)=>{setData(resp.data)}).catch(err=>console.log(err))},[check])

return(
    <div className="container">
        <Link to="/home/params/">Parameters</Link>
        
        <h1>Menu</h1>
        <button onClick={()=>{
            am(amount)
            navigateTodash()}} >confirm order</button>
        {data.map((e,i)=>{
        console.log(command)
            return(
                <div key={i} onClick={()=>{addToChart([...command,e])
                setAmount(amount+Number(e.price))}}>
                   <h1>{e.whattoorder}</h1> 
                   <h4>{e.price}</h4>
                </div>
            )
        })}
    
    </div>
)
}

export default DashBoard