import express from "express";
import userRoute from "../routes/userRoute";
import authRoute from "../routes/authRoute";
import postRoute from "../routes/postRoute";
import categoryRoute from "../routes/categoryRoute";

let router = express.Router();

let initWebRoutes = (app) => {
  router.use("/auth", authRoute);
  router.use("/users", userRoute);
  router.use("/posts", postRoute);
  router.use("/categories", categoryRoute);

  return app.use("/api/v1", router);
};

module.exports = initWebRoutes;
