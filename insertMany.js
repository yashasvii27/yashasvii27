const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/b3_5')
    .then(()=>console.log('success'))
    .catch((err)=>console.error(err))

const myschema=new mg.Schema({name:String,age:Number,status:Boolean})

mg.pluralize(null)
const data=new mg.model('person',myschema)

const createdata=async()=>{

    try {
        const pdata1=new data({name:'raj',age:22})
        const pdata2=new data({name:'jay',age:10})

        const result1=await data.insertMany([pdata1,pdata2])
        console.log(result1)

        const result2=await data.find()
        console.log(result2)

        const result3=await data.find({name:'abc'},{_id:0})
        console.log(result3)


    } catch (error) {
        console.log(error)        
    }
}
createdata()