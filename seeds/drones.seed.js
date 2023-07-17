// Iteration #1
const mongoose = require("mongoose");

require("../db");
const droneM = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];
const datos = droneM
  .create(drones)
  .then((datos) => {
    console.log("data added successfully");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.close();
