import express from "express";

const app = express();

app.use(express.json()) // This line imp for post,put,delete apis

const PORT = 5001;

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.get("/global",(req,res)=>{
  res.send("Hello Global server")
})

// app.get("/global",(req,res)=>{
//   res.send("Hello Students")
// })

app.post("/register",(req,res)=>{
    let userData = req.body
    console.log(userData)
    // res.json(userData)
    // // or
    res.json({msg:"user registered successfully"})
})

// app.post("/students/22U61A0501",(req,res)=>{  //body is mandetory {"sum":"data"}
//   res.send("Hello manasa")
// })
// app.post("/students/22U61A0512",(req,res)=>{
//   res.send("Hello Aakash")
// })

app.post("/students/:roll",(req,res)=>{
  let id = req.params.roll;//body is not requred
  console.log(id)
  res.json(id)
})
app.put("/update",(req,res)=>{
    let userData = req.body
    console.log(userData)
    res.json({msg:"user updated successfully"})
})
app.delete("/delete",(req,res)=>{
    let userData = req.body
    console.log(userData)
    res.json({msg:"user deleted successfully"})
})
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})