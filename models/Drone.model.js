// Iteration #1 
const mongoose = require('mongoose');

const { Schema } = mongoose;
// { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },

const droneSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    propellers: Number,
    maxSpeed: Number, 
});
const droneModel = mongoose.model('Drone', droneSchema);


module.exports =  droneModel