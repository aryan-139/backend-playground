const express=require('express');
const app=express();
const PORT= 8001;
const {createServer}=require('http');
const {join}=require('path');
const {Server}=require('socket.io');


//basic installations for express
const cors=require('cors');
const server=createServer(app);
const io=new Server(server);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

io.on('connection',(socket)=>{
    console.log('A user is now connected');
});

