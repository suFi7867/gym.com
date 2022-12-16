const {Schema,model} = require('mongoose')

const UserSchema = new Schema({
username:String,
email:{type:String, unique:true},
password:{ type:String, required:true },
weight:{ type:Number },
height:{ type:Number },
age:{ type:Number },
gender: { 
    type: String ,
    enum:["Male","Female","Others"]
  },
bodyType: { 
    type: String ,
    enum:["Lean","Bulky","Muscular"]
  },
role: { 
    type: String ,
    enum:["Admin","User"],
    default: "User"
  },

},{versionKey:false})

const UserModel = model("user",UserSchema)
module.exports=UserModel