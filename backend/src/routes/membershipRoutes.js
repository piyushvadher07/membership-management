import express from "express";
import multer from "multer";
import { addMembership } from "../controllers/membershipController.js"; // ✅ Fixed import path
import { protect } from "../middleware/authMiddleware.js"; // ✅ Fixed import path

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`), // ✅ Fixed syntax
});

const upload = multer({ storage });

router.post("/", protect, upload.single("file"), addMembership); // ✅ Ensure correct field name

export default router;
