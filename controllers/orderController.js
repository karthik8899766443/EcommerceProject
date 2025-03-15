const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

// Create Order - /api/v1/order
exports.createOrder = async (req, res, next) => {
  try {
    const cartItems = req.body;

    // Calculate total amount
    const amount = Number(
      cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
    ).toFixed(2);

    const status = "pending";

    // Updating product stocks (Use for...of loop)
    for (const item of cartItems) {
      const product = await productModel.findById(item.product._id);
      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }

      // Ensure stock is available
      if (product.stock < item.qty) {
        return res.status(400).json({ success: false, message: `Not enough stock for ${product.name}` });
      }

      product.stock -= item.qty;
      await product.save();
    }

    // Create the order
    const order = await orderModel.create({ cartItems, amount, status });

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
