const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/connect')
    .then(()=>console.log('success'))
    .catch((err)=>console.error(err))

const myschema=new mg.Schema({name:String,age:Number,email:{type:String,required:true},date:{type:Date,default:new Date()}})

// mg.pluralize(null)
const person=new mg.model('person',myschema)


const pdata=new person({name:'jay',age:28,email:'jay123@gmail.com'})
pdata.save()