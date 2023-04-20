const express = require("express");
const router = express.Router();

const {
  getAllData,
  addData,
  getMyData,
  getCar,
  updateData,
  deleteData,
} = require("../controllers/carController");


router.post("/addData", addData);
router.get("/allData", getAllData);
router.get("/myData/:id", getMyData);
router.get("/getCar/:id", getCar);
router.put("/update/:id", updateData);
router.delete("/delete/:id", deleteData);

module.exports = router;