const { Configuration , OpenAIApi } = require("openai")
const express = require("express");
const app = express()
const cors = require("cors");

app.use(express.json());
app.use(cors());

const config = new Configuration({
    apiKey : "thisiskey"
})

const openai = new OpenAIApi(config);

app.post("/message", ()=>{

});



app.listen(3001, (err)=>{
    if(err)
    console.log("error in running server", 3001);
    else
    console.log("server is running on portal", 3002)
})
