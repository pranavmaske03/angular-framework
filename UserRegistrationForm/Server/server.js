const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 4698;
const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);
const app = express();

app.use(bodyparser.json());
app.use(cors());

async function GetConnectionForm()
{   
    let result = await client.connect();
    let db = result.db("MarvellousDB");
    return db.collection("Form");
}

async function ReadData(req,res) {
    
    let data = await GetConnectionForm();
    data = await data.find().toArray();
    res.json(data);
}

async function PostData(req,res) {
    
    let myData = req.body;
    
    let data = await GetConnectionForm();
    let result = await data.insertOne(myData);

    if(result.acknowledged)
    {
        console.log("Data inserted succesfully");
    }

    res.status(200).send({
        "status":true,
        "message":"Data inserted succesfully"
    })
}

function server_starter()
{
    console.log("Server listning at port number : "+port);
}

function root_page(req,res)
{
    res.send("server started...");
}

function main()
{   
    app.listen(port,server_starter);        
    app.get('/',root_page);        
    app.get('/getData',ReadData);
    app.post('/insertForm',PostData);
}

main();