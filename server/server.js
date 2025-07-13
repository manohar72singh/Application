// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const connectDB = require("./config/mongodb");
// const authRouter = require("./Routes/authRoutes");
// const userRouter = require("./Routes/userRoutes");
// // const allowedOrigins = ["http://localhost:5173"];
// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// app.use(cors({ origin: allowedOrigins, credentials: true }));
// const port = process.env.PORT || 1001;
// app.use(
//   cors({
//     origin: "https://auth-application-7th3.vercel.app", // ✅ allow your Vercel domain
//     credentials: true,
//   })
// );

// // 👇 ALLOW your Vercel frontend URL
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://auth-application-7th3.vercel.app",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// // API END Point.
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);
// // Database connection
// connectDB();

// // server connection
// app.listen(port, () => console.log(`Server Started on PORT:${port}`));
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/mongodb");
const authRouter = require("./Routes/authRoutes");
const userRouter = require("./Routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 1001;

// ✅ Define allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://auth-application-7th3.vercel.app",
];

// ✅ Step 2: Log the origin for every incoming request (DEBUG)
app.use((req, res, next) => {
  console.log("🔥 Incoming Origin:", req.headers.origin);
  next();
});

// ✅ CORS Configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// ✅ DB Connection
connectDB();

// ✅ Server start
app.listen(PORT, () => console.log(`✅ Server started on PORT: ${PORT}`));
