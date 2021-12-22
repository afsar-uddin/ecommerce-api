const express = require("express");
const app = express();
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const { Mongoose } = require("mongoose");
dotenv.config();


mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log('DB connected!'))
    .catch((err) => {
        console.log(err)
    })

// JSON 
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

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