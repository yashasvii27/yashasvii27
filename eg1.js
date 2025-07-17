// const mg=require('mongoose')
// mg.connect('mongodb://127.0.0.1:27017/b3_5')
//     .then(()=>console.log('success'))
//     .catch((err)=>console.error(err))

// const myschema=new mg.Schema({name:String,surname:String,age:Number,active:Boolean})

// mg.pluralize(null)
// const data=new mg.model('task1',myschema)

// const createdata=async()=>{

//     try {
//         const pdata1=new data({name:'test',surname:'test1',age:33,active:true})
//         const pdata2=new data({name:'hi',surname:'hi1',age:30,active:true})
//         const pdata3=new data({name:'hello',surname:'hello1',age:28,active:true})
//         const pdata4=new data({name:'hello',surname:'hello11',age:10,active:true})
//         const pdata5=new data({name:'abc',surname:'xyz',age:106,active:false})

//         const result=await data.insertMany([pdata1,pdata2,pdata3,pdata4,pdata5])
//         console.log(result)

//         const result1=await data.find({name:'hello'})
//         console.log(result1)

//         const result2=await data.find({age:{$gt:30}},{_id:0,name:1,active:1})
//         console.log(result2)

//         const result3=await data.find({name:'hello'})
//         console.log(result3)

//         const result4=await data.find({surname:'xyz'},{_id:0,active:1})
//         console.log(result4)

//         const result5=await data.updateMany({age:10},{$set:{age:20}})
//         console.log(result5)

//     } catch (error) {
//         console.log(error)        
//     }
// }
// createdata()

                                        //OR

const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/b3_5')
    .then(()=>console.log('success'))
    .catch((err)=>console.error(err))

const myschema=new mg.Schema({name:String,surname:String,age:Number,active:Boolean})

mg.pluralize(null)
const data=new mg.model('task1',myschema)

const createdata=async()=>{

    try {
        const mydata=[{name:'test',surname:'test1',age:33,active:true},
                       {name:'hi',surname:'hi1',age:30,active:true},
                       {name:'hello',surname:'hello1',age:28,active:true},
                        {name:'hello',surname:'hello11',age:10,active:true},
                        {name:'abc',surname:'xyz',age:106,active:false}]
    
        const result=[]

        result.push(await data.insertMany(mydata))
        result.push(await  data.find({name:'abc'},{_id:0}))
        result.push(await data.find({age:{$gt:30}},{_id:0,name:1,active:1}))
        result.push(await  data.find({name:'hello'}))
        result.push(await data.updateMany({age:10},{$set:{age:20}}))

console.log(result)

    } catch (error) {
        console.log(error)        
    }
}
createdata()