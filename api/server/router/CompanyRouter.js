const express = require('express')
const router = express.Router()
const Services = require('../services/Services')

router.get('/company', async function(req,res){
     const company = await Services.getCompany();
     res.json(company);
    

});     

router.get('/peoples', async function(req,res){
     const peoples = await Services.getPeoples();
     res.json(peoples);
});

module.exports = router;