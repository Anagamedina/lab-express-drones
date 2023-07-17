const express = require("express");
const router = express.Router();
const droneM = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones

  droneM.find({}).then((datos) => {
    // res.send(datos);
    res.render("drones/list.hbs", { drones: datos });
  }).catch(err=>console.log(err))
  //errorMessage?
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  droneM.create(req.body).then((datos) => {
    res.redirect("/drones");
  });
});

router.get("/drones/:id/edit", (req, res, next) => {
  
  droneM.findById(req.params.id).then((datos) => { 
    res.render("drones/update-form.hbs", { drone: datos });
  }) 
  
});

router.post("/drones/:id/edit", (req, res, next) => {

  // droneM.where({ _id: req.params.id }).update( res.body)

  droneM.findByIdAndUpdate(req.params.id, res.body).then((datos) => { 
    res.redirect("/drones");
  }).catch(()=>{
    //  res.redirect("/drones/"+req.params.id+"/edit")
     res.redirect(`/drones/${req.params.id}/edit`)
  })
   

  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  
  droneM.findByIdAndDelete(req.params.id).then((datos) => { 
    res.redirect("/drones");
  })
  
});

module.exports = router;
