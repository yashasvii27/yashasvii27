const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/B3_l5')
  .then(()=>console.log('success'))
  .catch((err)=>console.error(err))

const myschema=new mg.Schema({name:String,surname:String,age:Number,active:Boolean})
mg.pluralize(null)
const data=new mg.model('task1',myschema)

const updateone=async(name,update)=>{
    try{
        const result=await data.updateOne({name},update,{upsert:true,new:true})
        console.log(result)

    }
    catch(err){
        console.log(err)
    }
}
updateone('test',{name:'jay',age:100})

//.updateOne(filter,update,option,cb)
//.findByIdAndUpdate(id,update,option,cb)
//.findByIdAndDelete(id,)
