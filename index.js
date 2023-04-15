const { Configuration , OpenAIApi } = require("openai")
const express = require("express");
const app = express()
const cors = require("cors");

app.use(express.json());
app.use(cors());

const config = new Configuration({
    apiKey : "sk-Xvktw2HtSDvHtuQmYXADT3BlbkFJZSWRLCaz6ENLWQGZeqweSqm"
})

const openai = new OpenAIApi(config);

app.post("/message", (req , res)=>{
    console.log("hii");
    const response = openai.createCompletion({
        model : "text-davinci-003",
        prompt : req.body.prompt,
        temperature : 0,
        top_p : 1,
        frequency_penalty : 0,
        presence_penalty : 0,
        max_tokens : 1024
    })
    response.then(
        (data)=>{
            res.send({message :data.data.choices[0].text})
        }
    ).catch((err)=>{
        res.send({message : err})
    })
});



app.listen(3001, (err)=>{
    if(err)
    console.log("error in running server", 3001);
    else
    console.log("server is running on portal", 3002)
})
