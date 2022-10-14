import { useState,useEffect } from "react";
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
const Command=(props)=>{
    const {data,amount,cmd,am}=props
    

    const navigate = useNavigate();
    const navigateTodash = () => {
    
    navigate('/home');
  };
    const filte=(element)=>{
      var temp=[]
      var result=0
      data.filter((e,i)=> {
        if(i!==element){
          temp.push(e)
          result+=Number(e.price)
        }

      })
      am(result)
      cmd(temp)
    }
    const orde=()=>{
      data.map((e,i)=>{
        console.log(data)
        axios.post('http://localhost:3000/api/restorant/order',{order:e.whattoorder,idRest:e.resto_idresto}).then((resp)=>{console.log(resp)}).catch((err)=>{
          console.log(err).then(()=>{navigateTodash})
        })
      })
    }
 
console.log(typeof amount)
return(
    <div>
     {data.map((e,i)=>{
       
       return(
        <div key={i}>
        <h3>{e.whattoorder}</h3>
        <h4>{e.price}</h4>
        <p onClick={()=>{filte(i)}}>❌</p>

       --------------------------------
        
        </div>
       )
     })}
     
    total :{amount} $
    <button onClick={()=>{orde()}}>confirme</button>
    </div>
)
}

export default Command