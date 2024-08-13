const express = require('express')
const app = express();

app.use(express.json())

app.route('/',(req,res)=>{
    return res.status(200).send("Hello World");
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running on http://localhost:${process.env.PORT} made by - ${process.env.DEVELOPER}`);
})