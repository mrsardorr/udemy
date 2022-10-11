const express = require('express');
const router = express.Router();
const Products = require('../model/products')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const products = await Products.find()
  res.render('products', {
    title: 'Products',
    products
  });
});


router.get('/create', function (req, res, next) {
  res.render('addProduct', {
    title: 'Add'
  });
});

router.post('/create', async function (req, res, next) {
  const { name, image , price} = req.body

  const product = new Products({
    name,
    image,
    price
  })

  await product.save()

  res.redirect('/products')

});

router.get('/remove/:id', async (req, res) => {
  const id = req.params.id
  await Products.findByIdAndRemove(id)
  res.redirect('/products')
})


module.exports = router;
