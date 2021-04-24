const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  console.log('Express Router');
  res.end();
})

module.exports = router;

