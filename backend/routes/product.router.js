const express = require('express');
const {
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    getAllProducts,
} = require('../controllers/product.controller');
const { userProtect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/new', userProtect, createProduct);
router.get('/:productId', userProtect, getProductById);
router.patch('/update/:productId', userProtect, updateProduct);
router.delete('/delete/:productId', userProtect, deleteProduct);

module.exports = router;
