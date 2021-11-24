/* eslint-disable import/extensions */
const { mongoConnect } = require('../config/connect.js');
const Product = require('../models/product.model.js');

const data = [
  {
    brand: 'isdin',
    description: 'Fotoprotector ISDIN© Fusion WaterSPF 50+ 50ml',
    stock: 1,
    price: 12,
    image_url:
      'https://trello-attachments.s3.amazonaws.com/606b2ae98fdcaf38c8ff3ea2/609ba2d3aca12c8c3a705a7e/x/c3dba6d451831e9a496fb5e8ffaff18e/fotoprotector-isdin.jpg',
  },
  {
    brand: 'hyabak',
    description: 'Hyabak solución 10ml',
    stock: 0,
    price: 15,
    image_url:
      'https://trello-attachments.s3.amazonaws.com/606b2ae98fdcaf38c8ff3ea2/609ba2d3aca12c8c3a705a7e/x/730d27f86fa7f78e1bca8001f4c8f8f2/hyabak-solucion.jpg',
  },
  {
    brand: 'cerave',
    description: 'Cerave© Crema Hidratante 340ml',
    stock: 8,
    price: 9,
    image_url:
      'https://trello-attachments.s3.amazonaws.com/606b2ae98fdcaf38c8ff3ea2/609ba2d3aca12c8c3a705a7e/x/8dff3208f2bbf1aa2f7991609cdc1711/cerave-crema.jpg',
  },
  {
    brand: 'xhekpon',
    description: 'Xhekpon© crema facial 40ml',
    stock: 100,
    price: 14,
    image_url:
      'https://trello-attachments.s3.amazonaws.com/606b2ae98fdcaf38c8ff3ea2/609ba2d3aca12c8c3a705a7e/x/729bece040a7d1ad854bcaf167735436/xhekpon-crema.jpg',
  },
  {
    brand: 'piz buin',
    description: 'Piz Buin© Allergy SPF50+ loción 200ml',
    stock: 10,
    price: 6,
    image_url:
      'https://trello-attachments.s3.amazonaws.com/606b2ae98fdcaf38c8ff3ea2/609ba2d3aca12c8c3a705a7e/x/06b11e7f10af4ca7bbcdd7fec6d0b22a/piz-buin.jpg',
  },
  {
    brand: 'la justicia',
    description: 'LaJusticia colágeno con magnesio 450comp',
    stock: 14,
    price: 23,
    image_url:
      'https://trello-attachments.s3.amazonaws.com/606b2ae98fdcaf38c8ff3ea2/609ba2d3aca12c8c3a705a7e/x/5a9daab7061707fc47978c1766c4688e/lajusticia-colageno.jpg',
  },
];
mongoConnect();
Product.deleteMany({});
Product.create(data);
