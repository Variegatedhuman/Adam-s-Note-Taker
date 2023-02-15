const router = require("express").Router();
const db = require("../db/db.json")
const fs = require("fs")
const path = require("path")
const {v4:uuidv4} =require("uuid")

router.get("/notes", (req, res) => {
    const saveNotes = db;
    res.json(saveNotes)
});

router.post("/notes", (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    const saveNotes = db;
    saveNotes.push(newNote)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify(saveNotes))
        res.status(200).json(saveNotes)
});

module.exports = router;