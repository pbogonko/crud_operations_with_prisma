const express=require('express');
const {getAll,createuser,updateuser,deleteuser,getById}=require('../controllers/userscontroller')
const{body}=require('express-validator')
const router=express.Router()

router.get('/',getAll);
router.post('/',body(),createuser);
router.put('/:id',updateuser);
router.get('/:id',getById);
router.delete('/:id',deleteuser);

module.exports=router;