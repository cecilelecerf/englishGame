const express = require('express');
const router = express.Router();
const BrandController = require('../controllers/BrandController');

router 
    .route('/')
        .get(BrandController.listenAllBrands)
        .post(BrandController.createABrand);

module.exports = router;