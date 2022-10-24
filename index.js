const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 30,
            title: "The Witcher 3",
            year: 2015,
            price: 29
        },
        {
            id: 5,
            title: "Cuphead",
            year: 2017,
            price: 45
        },
    ]
}



app.listen(8181,() => {
    console.log("API RODANDO!");
});