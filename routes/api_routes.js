const router = require('express').Router();
const {
    index
} = require('../controllers/api_controller');


router.get('/', index);

module.exports=router;