import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/post-routes.js";
import dalleRoutes from "./routes/dalle-routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
   res.send("Hello World----!");
});

const startServer = async () => {
   try {
      await connectDB(process.env.MONGODB_URL);
      app.listen(process.env.PORT, () => {
         console.log(`Server is running on port https://ai-images-backend.onrender.com:${process.env.PORT}`);
      });
   } catch (error) {
      console.log(error);
   }
};

startServer();
