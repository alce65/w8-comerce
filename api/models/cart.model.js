const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      amount: { type: Number, required: true },
    },
  ],
});

module.exports = model('Cart', cartSchema);
