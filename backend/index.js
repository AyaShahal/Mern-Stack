import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
// import multer from "muler"
import connectDB from "./config/db.js";
import adminRouter from "./routes/adminroutes.js";
import productRouter from "./routes/product.js";
import categoryRouter from "./routes/category.js";
import verifyToken from "./middleware/admin.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import searchRouter from "./routes/usersearch.js";
import serviceRouter from "./routes/service.js";
import image from "./middleware/image.js";
import path from 'path';
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();
const app = new express();
app.use(express.static("./uploads"));
// app.use(express.static(path.join(__dirname, "./uploads")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.post("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome to our Website 🙌");
});
app.use('/image', express.static(path.join(process.cwd(), 'uploads')));
// app.get('/uploads/images/:imagename', (req, res) => {
//   const imagename = req.params.imagename;
//   res.sendFile(path.join(process.cwd(), 'uploads/images', imagename));
// });
app.get('/uploads/:imagename',image.getImage)
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/admin", adminRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/search", searchRouter);
app.use("/api/service", serviceRouter);
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`)
);
