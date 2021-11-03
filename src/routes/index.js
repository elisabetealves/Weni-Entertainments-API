const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "Title": "API - Desafio Weni Entertainments",
        "Version": "1.0.0",
        "Message": "Seja bem-vindo(a) a Entertainments uma API completa para diverti você"
    });
});

module.exports = router;