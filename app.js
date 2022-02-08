const express = require('express')
const port = 3000
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')

})

app.post('/', (req, res) => {

    console.log('post method')
})

app.listen(port, () => {

    console.log("server started on: ", port)
})