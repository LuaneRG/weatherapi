const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors()); // Libera o acesso para o seu index.html

// Esta é a "rota". Quando o seu site chamar /clima, isso aqui roda:
app.get("/clima", async (req, res) => {
    const cidade = req.query.cidade; // Pega a cidade que o site enviou
    const chave = process.env.CHAVE_API; // Pega a chave do seu .env

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    res.json(dados); // Devolve o resultado da API para o seu script.js
});

app.listen(3000, () => console.log("Servidor ON na porta 3000"));
