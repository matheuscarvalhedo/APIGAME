const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");

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

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id",(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

    if(game != undefined){
        res.statusCode = 200;
        res.json(game);
    }else{
        res.sendStatus(404);
    }
 }

});


app.listen(8181,() => {
    console.log("API RODANDO!");
});