const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/Home", (req,res)=>{
    res.send("Hallo world!");
})

app.post("/add", (req,res)=>{
    const addition = Number(req.body.num1)+Number(req.body.num2)
    if(addition<-1000000){
        res.send({status:"error", message:"Underflow"})

    }else if(addition>1000000){
        res.send({satus:"error",message:"Overflow"})
    }else if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send({status:"failure", message:"Invalid data types"})
    }else{
        res.send({status:"success", message:"sum of the num1 and num2",result:addition})
    }
})

app.post("/sub", (req,res)=>{
    const substraction = Number(req.body.num1)-Number(req.body.num2)
    if(substraction<-1000000){
        res.send({status:"error", message:"Underflow"})

    }else if(substraction>1000000){
        res.send({satus:"error",message:"Overflow"})
    }else if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send({status:"failure", message:"Invalid data types"})
    }else{
        res.send({status:"success", message:"substraction of the num1 and num2",result:substraction})
    }
})

app.post("/mul", (req,res)=>{
    const multiplication = Number(req.body.num1)*Number(req.body.num2)
    if(multiplication<-1000000){
        res.send({status:"error", message:"Underflow"})

    }else if(multiplication>1000000){
        res.send({satus:"error",message:"Overflow"})
    }else if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send({status:"failure", message:"Invalid data types"})
    }else{
        res.send({status:"success", message:"multiplication of the num1 and num2",result:multiplication})
    }
})

app.post("/dev", (req,res)=>{
    const division = Number(req.body.num1)/Number(req.body.num2)
    if(division<-1000000){
        res.send({status:"error", message:"Underflow"})

    }else if(division>1000000){
        res.send({satus:"error",message:"Overflow"})
    }else if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send({status:"failure", message:"Invalid data types"})
    }else if(req.body.num2 == 0){
        res.send({status:"error", message:"Cannot divide by zero"
        })
    }
    else{
        res.send({status:"success", message:"division of the num1 and num2",result:division})
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;