// bắt buộc phải có dòng này
const express = require('express')
const router = express.Router();

const blogsController = require('../app/controllers/BlogController');


router.post('/store', blogsController.store);
router.get('/create', blogsController.create);
router.get('/:slug', blogsController.show);

module.exports = router;