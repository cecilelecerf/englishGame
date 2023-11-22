const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors()); // Ajoutez cette ligne pour permettre toutes les origines



const mongoose = require ("mongoose");
mongoose.connect('mongodb://172.22.0.2:27017/apinode');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const brandRoute = require('./routes/BrandRoute');
app.use('/', brandRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })