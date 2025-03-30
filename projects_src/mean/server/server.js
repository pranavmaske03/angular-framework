express = require('express');
eobj = express();
port = 5555;

// To handlw CORS
// Cross Roigin Resources Sharing
eobj.use((req,res,next)=>{
    res.header("Acess-Control-Allow-Origin",
    "http://localhost:4200");

    res.header("Acess-Control-Allow-Headers",
    "Origin, X-Requested-with, content-Type, Accept");

    next();
});

function Starter()
{
    console.log("Marvellous server is in listening mode at : "+port);
}

eobj.listen(port,Starter)

function MarvellousGet(req,res)
{
    res.send("Marvellous server started...");
}

function Marvellousbatches(req,res)
{
    res.json({"Name":"PPA","Fees":19500, "Duration":"4 months", "Language" : "java/c/cpp"});
}

function MarvellousData(req,res)
{
    res.json({"Name":"LB","Fees":20000, "Duration":"4.5 months", "Language" : "c/cpp/java"});
}

eobj.get('/',MarvellousGet);
eobj.get('/getBatches',Marvellousbatches);
eobj.get('/getInfo',MarvellousData)