// require de mes dépendances
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Initialisation de l'app
let app = express();
let apiRoutes = require('./routes/api-routes.js');
var port = process.env.PORT || 8080;

// config de bodyparser pour faire des requête POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connection avec mongoose
mongoose.connect('mongodb://localhost/apinode', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;

if (!db) {
    console.log('Erreur de connexion');
} else {
    console.log('Bien connecté a la DB');
}

app.get('/', (req, res) => res.send('Hello World !'));
app.use('/api', apiRoutes);
app.listen(port, function () {
    console.log('Running on port : ' + port); 
});