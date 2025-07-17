const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/b3_5')
    .then(()=>console.log('success'))
    .catch((err)=>console.error(err))

const myschema=new mg.Schema({name:String,age:Number,status:Boolean})

mg.pluralize(null)
const data=new mg.model('person',myschema)

const createdata=async()=>{

    try {
        const pdata=new data({name:'raj',age:22})
        const result=await pdata.save()
        console.log(result)
    } catch (error) {
        console.log(error)        
    }
}
createdata()