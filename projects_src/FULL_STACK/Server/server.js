const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

express = require('express');
eobj = new express();
port = 4698;

async function GetConnection()
{   
    let result = await client.connect();
    let db = result.db("MarvellousDB");
    return db.collection("Batches");
}

// To read the data
async function ReadData(req,res)
{
    let data = await GetConnection();
    data = await data.find().toArray();
    return data;
}

// To Delete the data
async function DeleteData(req,res)
{
    let data = await GetConnection();
    let result = await data.deleteOne({"Name" : "LSP"}) ;

    if(result.acknowledged)
    {
        console.log("Data gets deleted sucessfully");
    }
}

// To Update the data
async function UpdateData(req,res)
{
    let data = await GetConnection();
    let result = await data.updateOne({"Name" : "Python"}, {$set : {"Fees" : "25000"}})

    if(result.acknowledged)
    {
        console.log("Data gets updated sucessfully");
    }
}
// To Insert new data
async function InsertData(req,res)
{
    let data = await GetConnection();
    let result = await data.insertOne({"Name" : "LSP", "Duration" : "5 months", "Fees" : "19500"});

    if(result.acknowledged)
    {
        console.log("Data gets inserted scessfully");
    }
}

function server_starter()
{
    console.log("Marvellous Server listning at port number : "+port);
}
function root_page(req,res)
{
    res.send("Marvellous server started...");
}
async function read_batches(req,res)
{
    //Read data from MongoDB
    let received_data;
    received_data = await ReadData();

    //Send data to angular
    res.json(received_data); 
}
async function delete_batches(req,res)
{
    //Delete data from mongodb
    DeleteData();
}
async function insert_batches(req,res)
{
    //Insert data from mongodb
    InsertData();
}
async function update_batches(req,res)
{
    //Update data from mongodb
    UpdateData();
    res.send("Data updated sucessfully");
}

function main()
{   
    eobj.listen(port,server_starter);          // Listen server
    eobj.get('/',root_page);                    // root page
    eobj.get('/getBatches',read_batches);       // read request data
    eobj.get('/insertBatches',insert_batches);  // insert request data
    eobj.get('/deleteBatches',delete_batches);  // delete request data
    eobj.get('/updateBatches',update_batches);  // update request data
}

main();