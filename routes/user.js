const express = require('express');
const userController = require('../models/user');
const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAll);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
