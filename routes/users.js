var express = require('express');
var router = express.Router();
const service=require('./../models/users');



//una ver realizado el registro procede al users de routes asi confirma
const confirm=(req,res)=>

service
.update({  obj:{habilitado:true}  ,uidCorreo:req.params.uuid })
.then((r)=>res.json(r))
.catch((e)=>res.status(500).json(e));


/* GET users listing. */
router.get('/confirm/:uuid', confirm);


module.exports = router;
