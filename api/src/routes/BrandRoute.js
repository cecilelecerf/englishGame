const express = require('express');
const multer = require('multer');
const router = express.Router();
const BrandController = require('../controllers/BrandController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Dossier où les fichiers seront stockés
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Utilisez le nom d'origine pour le fichier
    }
  });
  
  const upload = multer({ storage: storage });
  

router 
    .route('/')
        .get(BrandController.listenAllBrands)
        .post(upload.fields([
            { name: 'iconographicLogo', maxCount: 1 },
            { name: 'pixalisedLogo', maxCount: 1 },
            { name: 'iconBusiness', maxCount: 1 }
          ]), BrandController.createABrand);

module.exports = router;