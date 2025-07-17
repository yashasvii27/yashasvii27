const expr=require('express')
const cors=require('cors')
const mg=require('mongoose')
const app=expr()
app.use(cors())
app.use(expr.json())

mg.connect("mongodb://127.0.0.1:27017/b3_5")
    .then(()=>console.log('success'))
    .catch((err)=>console.error(err))

const myschema=new mg.Schema({username:String})
const data=new mg.model('user',myschema)

app.post('/signup',async(req,res)=>{
    try{
        const newuser=new data({username:req.body.username})
        await newuser.save()
        res.send()
    }catch(err){
        res.send(err)
    }
})
app.listen(5000)