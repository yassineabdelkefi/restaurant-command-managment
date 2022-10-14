import { useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
const Authentification=(props)=>{
const [info,setInfo]=useState({name:'',password:''})
const [id,setId]=useState([])
const navigate = useNavigate();
const navigateTodash = () => {
    
    navigate('/home');
  };
const login=()=>{
    axios.post(`http://localhost:3000/api/restorant/connection`,info).then((resp)=>{
        resp.data.length===0?alert('password or user name invalid contact 29717317 for more details'):localStorage.setItem('id',JSON.stringify(resp.data[0].idresto))}).then(()=>navigateTodash()).catch((err)=>{
            console.log(err)
        })
}

    return(
        <div className="authontification">
        <p>You must log in acces to the dash board </p>
    
        
          <label>
            Username: <input type="text" onChange={(e)=>{setInfo({...info,name:e.target.value})}}/>
            Password: <input type="password" onChange={(e)=>{setInfo({...info,password:e.target.value})}} />
          </label>
          <button  onClick={()=>{
            login()
            }}>Login</button>
        
      </div>
    )
}
export default Authentification