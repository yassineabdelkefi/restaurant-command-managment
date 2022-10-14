const express=require('express')
const router=express.Router()
const {getDash,dashparamsA,dashHome,passorder,createC,updateDash,deleteOrd}=require('../contorolers/restorant.js')
//connection route
router.post('/connection',getDash)
// dashboard  controlers route
router.post('/dashboard',dashparamsA)
router.get('/:id',dashHome)
router.put('/dashboard',updateDash)

// create when click on pass order
router.post('/order',passorder)
//delete the order 
router.delete('/order',deleteOrd)



module.exports=router