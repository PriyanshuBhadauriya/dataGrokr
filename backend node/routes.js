const express =require('express')
const router = express.Router()
const submitTemplateCopy =require('../models/submit')

router.post('./signup',(request,response) =>{
	const submitUser = new submitTemplateCopy({
		fullName:request.body.fullName,
		lastname:request.body.lastname,
		email:request.body.email,
		address:request.body.address,
		pincode:request.body.pincode,
		database:request.body.database
	})
	submitUser.save()
	.then(data =>{
		response.json(data)
	})
	.catch(error =>{
		response.json(error)
	})
})


module.exports = router