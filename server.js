import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRouters.js";
import productRoutes from "./routes/productRoutes.js";
// configure env
dotenv.config();
const app = express();

// database config
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// Port
const PORT = process.env.PORT || 5000;

// run listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgCyan.white);
});
