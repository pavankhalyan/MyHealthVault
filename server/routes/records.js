const express = require("express");
const router = express.Router();
const multer = require("multer");
const Record = require("../models/Record");
const path = require("path");


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post("/upload-multiple", upload.array("files", 10), async (req, res) => {
  try {
    const { title, description } = req.body;
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ success: false, message: "No files uploaded" });
    }

    const patientId = req.user?.id || "662f6abc1234567890fedcba"; 

    const records = await Promise.all(
      files.map((file) => {
        const newRecord = new Record({
          patientId,
          title,
          description,
          filePath: file.path,
        });
        return newRecord.save();
      })
    );

    res.json({ success: true, records });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
