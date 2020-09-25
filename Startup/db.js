const winston = require("winston");
const mongoose = require("mongoose");
const db = require("../configuration/index");
mongoose.Promise = global.Promise;

module.exports = function () {
    mongoose
        .connect(process.env.MONGODB_URI || db.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("connected to MongoDB");
            winston.info("connected to the MongoDB .....");
        });
};
