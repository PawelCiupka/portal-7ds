import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import connectStore from "connect-mongo";
const logger = require("morgan");
const path = require("path");
import * as routes from "./routes/index";
// import {
//   PORT,
//   NODE_ENV,
//   MONGO_URI,
//   SESS_NAME,
//   SESS_SECRET,
//   SESS_LIFETIME
// } from "./config";

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");

    const app = express();

    app.disable("x-powered-by");

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(logger("dev"));

    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.resolve(__dirname, "../../frontend/build")));
    }

    const MongoStore = connectStore(session);

    app.use(
      session({
        name: process.env.SESS_NAME,
        secret: process.env.SESS_SECRET,
        store: new MongoStore({
          mongooseConnection: mongoose.connection,
          collection: "session",
          ttl: parseInt(process.env.SESS_LIFETIME) / 1000
        }),
        saveUninitialized: false,
        resave: false,
        cookie: {
          sameSite: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: parseInt(process.env.SESS_LIFETIME)
        }
      })
    );

    app.get("*", (request, response) => {
      response.sendFile(
        path.join(path.resolve(__dirname, "../../frontend/build"), "index.html")
      );
    });

    const apiRouter = express.Router();
    app.use("/api", apiRouter);
    apiRouter.use("/users", routes.userRoutes);
    apiRouter.use("/session", routes.sessionRoutes);
    apiRouter.use("/ticket", routes.ticketRoutes);
    apiRouter.use("/management", routes.managementRoutes);
    apiRouter.use("/helper", routes.helperRoutes);
    apiRouter.use("/room", routes.roomRoutes);

    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    );
    console.log(
      "---------------------------------------------------------------"
    );
    console.log(process.env);
    console.log(
      "---------------------------------------------------------------"
    );
  } catch (err) {
    console.log(err);
  }
})();
