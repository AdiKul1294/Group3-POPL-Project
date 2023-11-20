let UserModel = require("../models/user_model");
let express = require("express");
let router = express.Router();

//GET
router.get("/login", (req, res) => {
    if(!req.query.email || !req.query.password) {
        return res.status(400).send("Missing URL parameter: email or password");
    }

    UserModel.findOne({
        email: req.query.email,
        password: req.query.password
    })
        .then(doc => {
            res.send(doc.name);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

module.exports = router;
