const mongose = require("mongose");
const { boolean } = require("webid1-conversions");

const CartSchema = new mongose.Schema({
    userId: { type: String, require: true },
    product: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1
            },
        },
    ],

}, { timestamps: true });

module.exports = mongose.model("Cart", CartSchema);