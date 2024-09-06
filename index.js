const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.get("/",function(req,res){
    const n=req.query.n;
    console.log(req.query);
    res.status(200).send("hi you hit base url "+n);
    // throw new Error("something wrong ")
});

app.listen(PORT,()=>{
    console.log('listening ..'+PORT);
});
