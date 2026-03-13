const express = require("express")
const app = express.Router()
app.use(express.json())

let usuario =  [
    {
        id: 1,
        nome: "Carlos",
        rg: "12.345.678-9"
    },
    {
        id: 2,
        nome: "Maria",
        rg: "98.765.432-1"
    }
]

app.get("/usuario", (req, res) => {
    res.json(usuario)
})

app.get("/site", (req, res) => {
    res.send("Bem-vindo ao servidor Node.js. Este é um exemplo de rota simples.")
})

app.get("/calculo/:valor", (req, res) => {
    const valor = req.params.valor
    res.send(`O valor ${valor} elevado ao quadrado é ${valor*valor}`)
})

module.exports = app 