import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// Fix ES module dirname issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: ["https://job-portal-web-app-3.onrender.com"],
  credentials: true,
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 5001;

// API routes
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

// ---- PRODUCTION BUILD SERVE ----
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "Frontend", "dist")));

  // FIX: Express v5 does NOT support "*" → use regex /.*/
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
})
