let UserModel = require("../models/user_model");
let express = require("express");
let router = express.Router();

// POST
router.post("/signup", (req, res) => {
    if(!req.body) {
        return res.status(400).send("Request body is missing");
    }

    let model = new UserModel(req.body);
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(201).send(doc); // 201: Created resource successfully 
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});

module.exports = router;