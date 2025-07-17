//validation
const mg=require('mongoose')

mg.connect("mongodb://127.0.0.1:27017/b3_5").then(()=>console.log('success')).catch((err)=>console.error(err))
myschema=new mg.Schema(
    {name:{type:String,required:true,lowercase:true,trim:true,minlength:[3,'minimum 3 letters'],maxlength:[10,'maximum 10 letters']},
    age:{type:Number,validate(v1){
        if(v1<=0){
            throw new Error('must be positive')
        }}},
    gender:{type:String,uppercase:true,enum:['MALE','FEMALE']}})
const data=new mg.model('person',myschema)
const pdata=new data({name:'abc',age:20,gender:'male'})
pdata.save()