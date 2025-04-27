require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/mongodb");
const authRouter = require("./Routes/authRoutes");
const userRouter = require("./Routes/userRoutes");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));
const port = process.env.PORT || 1001;

// API END Point.
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
// Database connection
connectDB();

// server connection
app.listen(port, () => console.log(`Server Started on PORT:${port}`));
