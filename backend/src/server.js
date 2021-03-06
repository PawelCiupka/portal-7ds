import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import connectStore from "connect-mongo";
const logger = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
import * as routes from "./routes/index";
import { intervalReservationFunction } from "./util/roomReservationHelper";

dotenv.config();

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

    app.use(express.static(path.resolve(__dirname, "../../frontend/build")));

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

    const apiRouter = express.Router();

    app.use(express.static(path.resolve(__dirname, "../../frontend/build")));

    app.use("/api", apiRouter);
    apiRouter.use("/users", routes.userRoutes);
    apiRouter.use("/session", routes.sessionRoutes);
    apiRouter.use("/ticket", routes.ticketRoutes);
    apiRouter.use("/management", routes.managementRoutes);
    apiRouter.use("/helper", routes.helperRoutes);
    apiRouter.use("/room", routes.roomRoutes);
    apiRouter.use("/mail", routes.mailRoutes);

    app.get("*", function(request, response) {
      response.sendFile(
        path.resolve(__dirname, "../../frontend/build", "index.html")
      );
    });

    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    );

    intervalReservationFunction();
  } catch (err) {
    console.log(err);
  }
})();
