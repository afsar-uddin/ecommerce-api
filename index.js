const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000
const dotenv = require("dotenv");


const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

const { Mongoose } = require("mongoose");
dotenv.config();


mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log('DB connected!'))
    .catch((err) => {
        console.log(err)
    })

// MIDDLEWARE
app.use(cors());

// JSON  
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

// TESTING API
app.get("/api/test", () => {
    console.log("running...")
});

app.get('/', (req, res) => {
    res.send('Hello eCom Shop!')
});






app.listen(port, () => {
    console.log('Server is running on', port)
});