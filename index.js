var express = require("express");
var app = express();
var port = process.env.PORT || 4201;
var bodyParser = require('body-parser');

// cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// body parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let places = [{
    id: 1,
    name: "La petite flambée",
    street: "1 Rue de l'Erbonière",
    town: "Cesson-Sévigné",
    zip: "35510"
  },
  {
    id: 2,
    name: "Côté Sud",
    street: "35 Rue du Bignon",
    town: "Chantepie",
    zip: "35510"
  },
  {
    id: 3,
    name: "C Prêt cafétéria",
    street: "Allée Rue Du Bas Village 00028",
    town: "Chantepie",
    zip: "35510"
  }
];

app.get("/api/v1/places", (req, res) => {
  res.send(places);
});

app.post("/api/v1/places", (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.sendStatus(500);
  } else {
    const newPlace = {};
    newPlace.id = req.body.id;
    newPlace.name = req.body.placeName;
    newPlace.street = req.body.placeTown;
    newPlace.zip = req.body.placeZip;
    newPlace.createAd = new Date().toISOString();
    places = [...places, newPlace];

    res.send(newPlace).status(201);
  }
});

app.listen(port, () => console.log(`server listening on port ${port}`));