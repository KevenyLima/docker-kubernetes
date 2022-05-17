import Express from "express";

const app = Express()

app.get("/",(req,res)=>{
  res.send("hello my image")
})

app.listen(3000,()=>console.log("rodando"))