const express = require("express");

const {
  createHealthRecord,
  getHealthRecords,
  getHealthRecordById,
  updateHealthRecord,
  deleteHealthRecord,
} = require("../controllers/healthController");

const router = express.Router();

router.route("/").post(createHealthRecord).get(getHealthRecords);

router
  .route("/:id")
  .get(getHealthRecordById)
  .put(updateHealthRecord)
  .delete(deleteHealthRecord);

module.exports = router;
