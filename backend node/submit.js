const mongoose = require('mongoose')
const submitTemplate = new mongoose.Schema({
	firstName:{
		type:String,
		required:true
	},
	lastname:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	address:{
		type:String,
		required:true
	},
	pincode:{
		type:Number,
		required:true
	},
	database:{
		type:String,
		required:true
	}
})
module.exports = mongoose.model('mytable',submitTemplate)