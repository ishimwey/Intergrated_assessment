const express =require('express');
const app =express();
const port= 3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"this is my backend appilication"});
});
app.post('/',(req,res)=>{
    res.status(200).json({message:"THIS IS MY BACKEND APPLICATION FOR POST"});
});

app.listen(port,()=>{
    console.log(`server is running on port localhost:${port}`);
})