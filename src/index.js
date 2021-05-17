const express = require('express')
const app = express()
const axios = require('axios')
const port = 10000
app.use(express.json())

app.post('/eventos', (req, res) => {
    const eventos = req.body;
    axios.post('http://localhost:2000/eventos', eventos);
    axios.post('http://localhost:3000/eventos', eventos);
    axios.post('http://localhost:5000/eventos', eventos);
    res.status(200).send({msg: "ok"})
})

app.get("/eventos", (req, res) => {
    res.send(eventos);
});
app.listen(port, () => console.log('Barramento, Porta 10000'))
