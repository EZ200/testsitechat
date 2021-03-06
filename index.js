const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

server.listen(3000, () => {
    console.log("Lancé sur le serveur 3000")
})


io.on('connection', (socket) => {
    console.log("Un utilisateur s\'est connecté.")

    socket.on('disconnect', () => {
        console.log("Un utilisateur s\'est déconnecté.")
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    });
    

})