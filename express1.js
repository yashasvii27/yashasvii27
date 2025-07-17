const expr=require('express')
const app=expr()
const mg=require('mongoose')

mg.connect('mongodb://127.0.0.1:27017/b3_5')
    .then(()=>console.log('success'))
    .catch((err)=>console.error(err))

const myschema=new mg.Schema({username:String,password:String})
const data=new mg.model('myexdata',myschema)

app.use(expr.static(__dirname,{index:'express1.html'}))

app.get('/login',(req,res)=>{
    const pdata=new data({username:req.query.username,password:req.query.password})
    pdata.save()
    res.send('Data sent successfully!')
})

app.listen(5006)