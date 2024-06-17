const {PrismaClient}=require('@prisma/client')

const prisma=new PrismaClient();
const getAll=async (req,res)=>{
    const allusers=await prisma.users.findMany()
    res.json(allusers)

}
const getById=async (req,res)=>{
    const id=req.params.id
    const user=await prisma.users.findUnique({where:{id:parseInt(id)}})
    res.json(user)

}
const createuser= async (req,res)=>{
    const newuser=await prisma.users.create({data:req.body})
    res.json(newuser)
      

}
const updateuser= async (req,res)=>{
    const id=req.params.id
    const newCity=req.body.city
    const newuser=await prisma.users.update({where:{id:parseInt(id)},data:{city:newCity}})
    res.json(newuser)
      

}
const deleteuser= async (req,res)=>{
    const id=req.params.id
    const deleteuser=await prisma.users.delete({where:{id:parseInt(id)}});
    res.json(deleteuser)
      

}

module.exports={getAll,createuser,updateuser,deleteuser,getById}