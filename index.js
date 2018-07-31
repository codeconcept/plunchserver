var express = require('express');
var app = express();
var port = process.env.PORT || 4201;

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/v1/places', (req, res) =>
  res.send({
    places: [
      {
        id: 1,
        name: 'La petite flambée',
        street:'1 Rue de l\'Erbonière',
        town: 'Cesson-Sévigné',
        zip: '35510'
      },
      {
        id: 2,
        name: 'Côté Sud',
        street:'35 Rue du Bignon',
        town: 'Chantepie',
        zip: '35510'
      },
      {
        id: 3,
        name: 'C Prêt cafétéria',
        street:'Allée Rue Du Bas Village 00028',
        town: 'Chantepie',
        zip: '35510'
      },
    ]
  })
);

app.listen(port, () => console.log(`server listening on port ${port}`));

