const express = require('express');
const  User  = require('../models/User');

const router = express.Router();

// Create
router.post('/', (req, res) => {
    const newuser = new User({ ...req.body });
    newuser
        .save()
        .then((user) => res.status(200).json(user))
        .catch((err) => res.send(err));
    
})
// get
router.get('/', (req, res) => {
    User.find().then(users=>res.send(users)).catch(err=>res.send(err))
})

//edit
router.put('/update/:_id', (req, res) => {
    let _id = req.params._id;
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(user => res.send(user))
        .catch(err => res.send(err));
})
//delete
router.delete('/delete/:_id', (req, res) => {
    let _id = req.params._id;
    User.findByIdAndDelete({ _id })
        .then(user => res.send(user))
        .catch(err => res.send(err));
})

module.exports = router;