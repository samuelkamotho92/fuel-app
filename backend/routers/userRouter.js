const express = require('express');
const userAuthCont = require('../controllers/userAuthControler')
const router = express.Router();

router
.route('/getUser')
.get(userAuthCont.getUsers);

router
.route('/:id')
.get(userAuthCont.getUser)
.patch(userAuthCont.updateUser)
.delete(userAuthCont.deleteUser)

router
.route('/register')
.post(userAuthCont.register);

router
.route('/login')
.post(userAuthCont.login)


module.exports = router