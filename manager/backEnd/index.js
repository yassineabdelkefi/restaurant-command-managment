const express=require('express');  
const cors=require('cors');
const app=express();
const db = require('./models/config');
const routes=require('./routes/restorant')
// midelwares
app.use(cors())
app.use(express.json())
// to the routes
app.use('/api/restorant',routes)

// prot 
const prot=3000
app.listen(prot,(err)=>{
    err ? console.log(err) : console.log('conected') 
})