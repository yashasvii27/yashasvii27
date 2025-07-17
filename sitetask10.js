// You are developing a MongoDB-based application using Mongoose. You need to define a userSchema that includes various validation rules to ensure data integrity and consistency.
// 1.     Define a Mongoose schema called userSchema with the following fields and validation requirements:
// username:
// Required and must be between 4 and 20 characters long.
// Must start with letters and end with digits.

// Should be trimmed of any leading or trailing spaces.
// Should be converted to uppercase before saving.
// email:
// Required, must be unique across the collection.
// Must follow the standard email format.
// age:
// Must be a number between 18 and 65.
// role:
// Must be either 'user' or 'admin'.
// Should default to 'user' if not provided.

const mg=require('mongoose')
const v=require('validator')

mg.connect("mongodb://127.0.0.1:27017/b3_5")
    .then(()=>console.log('success'))
    .catch((err)=>console.error(err))

myschema=new mg.Schema({
    
    username:{type:String,required:true,uppercase:true,trim:true,minlength:[4,'minimum 4 letters'],maxlength:20},

    email:{type:String,required:true,unique:true,validate:[v.isEmail]},

    age:{type:Number,required:true,minlength:18,maxlength:65},
        
    role:{type:String,default:'user',lowercase:'true',emun:['admin','user']}

    })

mg.pluralize(null)

const data=new mg.model('task10',myschema)
const pdata=new data({username:'abcd',email:'abc@gmail.com',age:20,role:'user'})
pdata.save()