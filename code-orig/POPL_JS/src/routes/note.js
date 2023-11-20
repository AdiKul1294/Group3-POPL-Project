let NoteModel = require("../models/note_model");
let express = require("express");
let router = express.Router();

// POST
router.post("/note", (req, res) => {
    if(!req.body) {
        return res.status(400).send("Request body is missing");
    }

    let model = new NoteModel(req.body);
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

//GET
router.get("/note", (req, res) => {
    if(!req.query.title) {
        return res.status(400).send("Missing URL parameter: title");
    }

    NoteModel.findOne({
        title: req.query.title
    })
        .then(doc => {
            let note = doc;
            res.send(doc);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

//GET all notes
router.get("/allnote", (req, res) => {
    NoteModel.find()
        .then(doc => {
            let notes = doc;
            res.send(doc);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

//GET all notes and cause memory overflow
router.get("/mem_load", (req, res) => {
    if(!req.query.title) {
        return res.status(400).send("Missing URL parameter: title");
    }
    let start = Date().now();
    for(let i = 0; i < 1000000; i++) {
        console.log(i);
        let note = {
            title: "title",
            content: "content"
        }
    }
    let end = Date().now();
    let duration = (end - start)*1000;
    console.log('Time elapsed: ' + duration + 's');
    NoteModel.findOne({title: req.query.title})
            .then(doc => {
                res.send(doc);
            })
            .catch(err => {
                res.status(500).json(err.message);
            });
    
});

//PUT
router.put("/note", (req, res) => {
    if(!req.query.title) {
        return res.status(400).send("Missing URL parameter: title");
    }

    NoteModel.findOneAndUpdate({
        title: req.query.title
    }, req.body, {
        new: true
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

//DELETE
router.delete("/note", (req, res) => {
    if(!req.query.title) {
        return res.status(400).send("Missing URL parameter: note");
    }

    NoteModel.findOneAndDelete({
        title: req.query.title
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

module.exports = router;