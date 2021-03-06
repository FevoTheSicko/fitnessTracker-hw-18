const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose')
const path = require('path')
const PORT = process.env.PORT || 3000

const db = require('./models')

const app = express();

app.use(logger("dev"))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://root:Qazwsx12!@cluster0.mzw2g.mongodb.net/test", { useNewUrlParser: true });


app.use(require("./routes/index"))




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})