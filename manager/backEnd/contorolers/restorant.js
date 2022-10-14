const restorant=require('../models/restorant.js')


module.exports={
    getDash:(request,response)=>{
        
        restorant.dashBoar((err,result)=>{
            err ? response.status(500).send(err) : response.status(200).json(result)
        },request.body)
    },
    dashparamsA:(request,response)=>{
        restorant.dashP((err,result)=>{
            err ? response.status(500).send(err) : response.status(201).json(result)
        },request.body)
    },
    dashHome:(request,response)=>{
        
        restorant.dashHome((err,result)=>{
            err ? response.status(500).send(err) : response.status(200).json(result)
        },request.params.id)
    },
    passorder:(request,response)=>{
        console.log(request.body)
        restorant.passorder((err,result)=>{
            err ? response.status(500).send(err) : response.status(201).json(result)   
        },request.body)
    },
   
    updateDash:(request,response)=>{
        
        restorant.updateDash((err,result)=>{
            err ? response.status(500).send(err) : response.status(200).json(result)
        },request.body)
    },
    deleteOrd:(request,response)=>{
        restorant.deleteOrd((err,result)=>{
            err ? response.status(500).send(err) : response.status(200).json(result)
        },request.body)
    }
}