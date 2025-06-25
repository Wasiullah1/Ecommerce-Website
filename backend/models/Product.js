import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, default: 0 }
}, { timestamps: true });

productSchema.pre('save', function (next) {
  if (!this.id) {
    this.id = this._id.toString();
  }
  next();
});

const Product = mongoose.model('Product', productSchema);
export default Product;
