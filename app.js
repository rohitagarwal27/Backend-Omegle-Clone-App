const express = require('express');
const app = express();
const path = require("path");
const indexRouter = require("./routes/index.js")


const http = require("http");
const server = http.createServer(app);
const socketIo = require('socket.io'); 
const io = socketIo(server); // io---> input/output
let waitingUsers =[]
let rooms = {
    // 'jnsadlnldskn':['nnzxjm','axjnakK'],
    // 'jnsaznzdlnldskn':['nnzxzzjm','axjnakKzz']
}
io.on("connection", (socket)=>{ //  socket me ayega bande ka details
  socket.on("joinroom" , ()=>{
       if(waitingUsers.length>0){
            let partner = waitingUsers.shift(); // 1st wala aa jayega
            const roomname = `${socket.id}-${partner.id}`;
            socket.join(roomname)
            partner.join(roomname)
            io.to(roomname).emit("joined",roomname) // frontened me recieve hoga
        }else{
          waitingUsers.push(socket);
       }
    
  });

  socket.on("signalingMessage",function(data){ // 21
    socket.broadcast.to(data.room).emit("signalingMessage",data.message)
  })

  socket.on("message",function(data){
    socket.broadcast.to(data.room).emit("message",data.message)
    // khud ko chod ke samne wale sabko bhejo ek room me kon hai apke alawa

  });

  socket.on("startVideoCall" , function({room}){ // 29  then 30 frontend
    socket.broadcast.to(room).emit("incomingCall");
  })

  socket.on("acceptCall" , function({room}){ // 31
    socket.broadcast.to(room).emit("callAccepted");
  }); 
  socket.on("rejectCall" , function({room}){ // 31
    socket.broadcast.to(room).emit("callRejected");
  });
 
 
  socket.on("disconnect" , ()=>{
    let index =waitingUsers.findIndex(waitingUsers => waitingUsers.id === socket.id)
    waitingUsers.splice(index , 1) // to remove that index data from array // 1 ko delete
  })
 
})
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

server.listen(3000, () =>
    console.log(`App listening on port 3000!`)
);