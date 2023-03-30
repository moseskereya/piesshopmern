const express = require('express');
const router = express.Router();
const Pie = require('../../models/Pie');


router.get('/', (req, res) => {
  Pie.find()
    .then(pie => res.json(pie))
    .catch(err => res.status(404).json({ nobooksfound: 'No pie found' }));
});

router.get('/:id', (req, res) => {
    Pie.findById(req.params.id)
        .then(pie => res.json(pie))
        .catch(err => res.status(404).json({ nopie: "no pie found" }));
})

//hjdydjvhbhgyghfggfhgfhgdhdguhgd hbd

router.post('/', (req, res) => {
  Pie.create(req.body)
    .then(pie => res.json({ msg: 'Pie added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this pie' }));
});



router.put('/:id', (req, res) => {
    Pie.findByIdAndUpdate(req.params.id, req.body)
        .then(pie => res.json({ msg: "'Pie is updated successfully'" }))
        .catch(err => res.status(404).json({ err: "Unable to update a pie" }));
})
    
router.delete('/:id', (req, res) => {
    Pie.findByIdAndRemove(req.params.id, req.body)
        .then(pie => res.json({ msg: "Pie entry deleted successfully" }))
    .catch(err => res.status(404).json({err: "No such a pie"}))
})

module.exports = router;