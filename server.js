let port = process.env.PORT || 3030;
let express = require('express'); //DONT append '/' when you are importing node modules. 
let app = express();
app.use(express.static(__dirname+'/public/'));
app.get('/', function(request, response){
    response.sendFile('index.html');
})

var server = app.listen(port, function(){
    console.log('port -->'+port);
});

var io = require('socket.io')(server); 
io.on('connection', function(socket){
    console.log('Client Connected');
    socket.on('location', function(data){
        io.emit('Name', data);
        console.log(data);
    })
})






console.log(port);
