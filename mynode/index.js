
const express = require('express');
const app= express();
app.use(express.json());
const data=[{id:1,Problemstring:"",result:0}];
const MCQdata=[{id:1,userInput:"",isCorrect:false}];
const answer = "3";
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
app.get('/api/calculator',(req,res)=>{
    res.send(data);
});
app.get('/api/MCQ',(req,res)=>{
    res.send(MCQdata);
});
app.get('/api/calculator/:id',(req,res)=>{
    const onedata = data.find(c => c.id===parseInt(req.params.id));
    if(!onedata) res.status(404).send("Oops data not found! :_-(");
    res.send(onedata);
});
app.get('/api/MCQ/:id',(req,res)=>{
    const onedata = MCQdata.find(c => c.id===parseInt(req.params.id));
    if(!onedata) res.status(404).send("Oops data not found! :_-(");
    res.send(onedata);
});
app.post('/api/calculator',(req,res)=>{
    const answer = eval(req.body.body);
    const d ={
        id: data.length+1,
        title: req.body.title,
        body: req.body.body,
        ans: answer
    };
    data.push(d);
    res.send(d);
});
app.post('/api/MCQ',(req,res)=>{
    if(req.body.userInput === answer){
        const d ={
            id: MCQdata.length+1,
            userInput: req.body.userInput,
            isCorrect: true
        };
        MCQdata.push(d);
        res.send(d);
    }
    else{
         const k ={
            id: MCQdata.length+1,
            userInput: req.body.userInput,
            isCorrect: false
        };
        MCQdata.push(k);
        res.send(k);
    }
    
    
});
app.listen(3000,()=> console.log("listning on port 3000..."));