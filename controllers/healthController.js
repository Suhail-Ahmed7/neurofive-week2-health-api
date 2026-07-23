const HealthRecord = require("../models/HealthRecord");

// Create a new health record
const createHealthRecord = async (req, res, next) => {
  try {
    const { patientName, age, condition, status } = req.body;

    const healthRecord = await HealthRecord.create({
      patientName,
      age,
      condition,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Health record created successfully",
      data: healthRecord,
    });
  } catch (error) {
    next(error);
  }
};

// Get all health records
const getHealthRecords = async (req, res, next) => {
  try {
    const healthRecords = await HealthRecord.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: healthRecords.length,
      data: healthRecords,
    });
  } catch (error) {
    next(error);
  }
};

// Get one health record by ID
const getHealthRecordById = async (req, res, next) => {
  try {
    const healthRecord = await HealthRecord.findById(req.params.id);

    if (!healthRecord) {
      res.status(404);
      throw new Error("Health record not found");
    }

    res.status(200).json({
      success: true,
      data: healthRecord,
    });
  } catch (error) {
    next(error);
  }
};

// Update a health record
const updateHealthRecord = async (req, res, next) => {
  try {
    const healthRecord = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!healthRecord) {
      res.status(404);
      throw new Error("Health record not found");
    }

    res.status(200).json({
      success: true,
      message: "Health record updated successfully",
      data: healthRecord,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a health record
const deleteHealthRecord = async (req, res, next) => {
  try {
    const healthRecord = await HealthRecord.findByIdAndDelete(req.params.id);

    if (!healthRecord) {
      res.status(404);
      throw new Error("Health record not found");
    }

    res.status(200).json({
      success: true,
      message: "Health record deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHealthRecord,
  getHealthRecords,
  getHealthRecordById,
  updateHealthRecord,
  deleteHealthRecord,
};
