const express = require('express');
const router = express.Router();
const addActivity = require('../database/controllers.js').addActivity;


router.get('/', (req, res) => {
  console.log('Express Router');
  res.end();
})

module.exports = router;

