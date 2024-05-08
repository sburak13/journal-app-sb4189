const express = require('express');
const mongoose = require('mongoose');
const Entry = require('../models/entry');

const router = express.Router();

// GET
router.get('/', (req, res) => {
  Entry.find()
    .exec()
    .then((results) => {
      console.log(results);
      res.status(200).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// GET a specific entry
router.get('/:date', (req, res) => {
    const date = req.params.date;
    Entry.findOne({ date: date })
      .exec()
      .then((entry) => {
        if (entry) {
          console.log(entry);
          res.status(200).json(entry);
        } else {
          res.status(404).json({ message: "Entry not found" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});  

// POST
router.post('/', (req, res) => {
  const entry = new Entry({
    _id: new mongoose.Types.ObjectId(),
    date: req.body.date,
    content: req.body.content,
    emoji: req.body.emoji
  });
  entry
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Entry created',
        createdEntry: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// PATCH (hold off for now)
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  Entry.updateOne({ _id: id }, { $set: req.body })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// DELETE (not implemented)

module.exports = router;
