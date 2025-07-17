// You are developing a MongoDB application using Mongoose and need to enforce specific validation rules on the email and product fields in your userSchema.
// Define a Mongoose schema userSchema with the following fields:
// email:
// The field is required and must be unique in the database.
// It should be validated to ensure it contains a valid email address format.
// If the provided email is invalid, the error message should indicate that the email address is not valid.
// product:
// The field is required.
// It should only allow alphanumeric characters (i.e., letters and numbers).
// If the product field contains invalid characters, the error message should indicate that it is not a valid alphanumeric code.
// 2. Write an asynchronous function createDoc that creates and saves a document with random data.

const mg=require('mongoose')
const v=require('validator')

mg.connect("mongodb://127.0.0.1:27017/b3_5")
    .then(()=>console.log('success'))
    .catch((err)=>console.error(err))

myschema=new mg.Schema({
    email:{type:String,required:true,unique:true,validate:[v.isEmail,'email address is not valid.']},
    product:{type:String,required:true,validate:[v.isAlphanumeric,' it is not a valid alphanumeric code.']}
    })

    const data=new mg.model('task11',myschema)

    const createdata=async()=>{
        try{

            const pdata=new data({email:'abc@gmail.com',product:'mobile'})
            pdata.save()
        } catch (error) {
        console.log(error)        
    }

    }
mg.pluralize(null)

createdata()