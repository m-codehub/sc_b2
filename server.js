const express=require("express")
const server=express()
server.use(express.json())//to convert data from json format to object format
const mongo=require("mongoose")
mongo.connect("mongodb://localhost:27017/smgoih")
.then(()=>{
    console.log("mongo connected successfully")
})
.catch((E)=>{
    console.log(`error is ${E}`)
})
//schema defining
const studentschema=new mongo.Schema({
    name:"String",
    age:"Number",
    course:"String"

})
const student=mongo.model("students",studentschema)//assign schema to model and model to collection

server.post("/post",(req,res)=>{
    //req is used to get data from client frontend to backend
    //res is used to send data to client backend to frontend
    const s=new student({
        name:req.body.name,
        age:req.body.age,
        course:req.body.course
    })
    s.save()
    res.send("svaed successfully")
})


const port=3006
server.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})