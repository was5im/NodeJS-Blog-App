const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/registration', authController.registration_get);
router.post('/registration', authController.registration_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.get('/user/logout', authController.logout_get);

module.exports = router;