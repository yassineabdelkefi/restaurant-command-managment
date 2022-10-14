import  { useState,useEffect} from "react";
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios'
const Dashparams=({id})=>{
    const [data,setData]=useState([])
    const [check,setChec]=useState(false)
    const [info,setInfo]=useState({price:null,id:localStorage.id,whattoorder:''})
    const  [upinfo,setUpinfo]=useState({price:null,id:null,ord:''})
    
    
    
    
    useEffect(()=>{axios.get(`http://localhost:3000/api/restorant/${localStorage.id}`).then((resp)=>{setData(resp.data)}).catch(err=>console.log(err))},[check])
    const add=()=>{
        axios.post(`http://localhost:3000/api/restorant/dashboard`,info).then(setChec(!check)).catch(err=>console.log(err))
    }
    const update=(e)=>{
        axios.put(`http://localhost:3000/api/restorant/dashboard`,e).then(setChec(!check)).catch(err=>console.log(err))
    }
    console.log(upinfo)
return(
    <div>
        <Link to="/home">home</Link>
        <label>
        <h1>Create a new article ?</h1>
       Food :  <input onChange={(e)=>{setInfo({...info,whattoorder:e.target.value})}}></input>
       Price : <input type="number" onChange={(e)=>{setInfo({...info,price:e.target.value})}}></input>
        </label>
        <button onClick={()=>{add()}}>add</button>
        <div className="container">
        {data.map((e,i)=>{
        
        return(
            <div key={i}>
               <h1>{e.whattoorder}</h1> 
               <h4>{e.price}</h4>
               
               <div >
                <label>
                Food :  <input  onChange={(ev)=>{
                setUpinfo({...upinfo,ord:ev.target.value}||{...upinfo,ord:e.whattoorder})}}></input>
                Price : <input type="number" onChange={(ev)=>{
                if(ev.target.value===undefined)setUpinfo({...upinfo,price:e.price})
                else setUpinfo({...upinfo,price:ev.target.value})}}></input>
              <button onClick={()=>{
                setUpinfo({...upinfo,id:e.idorders})
                update(upinfo)
              }} >update</button>
              </label>
              </div>
            </div>
        )
    })}

        </div>
    </div>
)
}
export default Dashparams