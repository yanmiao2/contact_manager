const express = require('express');
const router = express.Router();

module.exports = router;

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', (req, res) => res.send('Get all users contacts'));

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', (req, res) => res.send('Add new Contact'));

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private
router.put('/:id', (req, res) =>
    res.send(`Update contact id: ${req.params.id}`)
);

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', (req, res) =>
    res.send(`Delete contact id: ${req.params.id}`)
);
