const { Router } = require('express');
const blogController = require('../controllers/blogController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/home', blogController.blogs_get);
router.get('/blog/:id', blogController.blog_details);
router.get('/user/:username', blogController.user_get);
router.get('/newBlog', requireAuth, blogController.newBlog_get);
router.post('/newBlog', blogController.newBlog_post);
router.delete('/blog/:id', blogController.blog_delete);
router.get('/update/:id', blogController.update_get);
router.patch('/update/:id', blogController.update_patch);


module.exports = router;