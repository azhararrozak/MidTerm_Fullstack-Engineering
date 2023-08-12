require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require('./routes/routes')
const cors = require('cors');

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL);
const dbs = mongoose.connection;

dbs.on('error', (err) => console.log(err));
dbs.once('open', () => console.log('Connected to database'));

const app = express();
const port = 3000;
const corsOptions = {
    origin: 'http://127.0.0.1:5173',
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));