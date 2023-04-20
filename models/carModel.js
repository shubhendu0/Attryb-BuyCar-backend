const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
    {
        userId : {
            type: String,
            required: [true, "Please provide picture of car"]
        },
        photo : {
            type: String,
            required: [true, "Please provide picture of car"]
        },
        model : {
            type: String,
            required: [true, "Please provide model name"]
        },
        brand : {
            type: String,
            required: [true, "Please provide brand name"]
        },
        description : {
            type: String,
            required: [true, "Please provide description"]
        },
        color : {
            type: String,
            required: [true, "Please provide color"]
        },
        year : {
            type : Number,
            required : [true, "Please provide year of model"]
        },
        price : {
            type: Number,
            required: [true, "Please provide price"]
        },
        mileage : {
            type: Number,
            required: [true, "Please provide power"]
        }
    }
)

const Car = mongoose.model("cars", carSchema);
module.exports = Car;