const express=require('express');
const router=express.Router();
const mainController=require('../controllers/maincontroller');



router.get('/',mainController.homepage);
router.get('/about',mainController.about);
router.get('/features',mainController.features);
router.get('/faqs',mainController.faqs);
module.exports=router;