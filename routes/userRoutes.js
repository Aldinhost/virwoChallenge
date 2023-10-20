const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const check = require('../middlewares/auth');

// Routes
router.get('/pruebaUser', check.auth, UserController.pruebaUser);

router.post('/register', UserController.register);
router.get('/login', UserController.login);
router.get('/home/:id', check.auth, UserController.home);


module.exports = router;