const express = require('express');
const router = express.Router();

// Routers
router.get('/getUsername/:id', getUsername);


module.exports = router;

// Functions
function getUsername(req, res, next) {
    const result = `${req.params.id}!`;
    res.send(result);
}
