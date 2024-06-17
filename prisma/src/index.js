const express=require('express')
const router=require('./routers/userRouter')

const app=express()
app.use(express.json())
app.use(router)


app.listen(3000,()=>console.log('server running at port 3000'))