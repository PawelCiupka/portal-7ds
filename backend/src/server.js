import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import connectStore from "connect-mongo";
const logger = require("morgan");
const aws = require("aws-sdk");
import {
  userRoutes,
  sessionRoutes,
  ticketRoutes,
  managementRoutes
} from "./routes/index";
import {
  PORT,
  NODE_ENV,
  MONGO_URI,
  SESS_NAME,
  SESS_SECRET,
  SESS_LIFETIME
} from "./config";

(async () => {
  try {
    let s3 = new aws.S3({
        PORT = process.env.PORT,
        NODE_ENV = process.env.NODE_ENV,
        MONGO_URI = process.env.MONGO_URI,
        SESS_NAME = process.env.SESS_NAME,
        SESS_SECRET = process.env.SESS_SECRET,
        SESS_LIFETIME = process.env.SESS_LIFETIME
    })


    await mongoose.connect(s3.MONGO_URI, {
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
        name: s3.SESS_NAME,
        secret: s3.SESS_SECRET,
        store: new MongoStore({
          mongooseConnection: mongoose.connection,
          collection: "session",
          ttl: parseInt(s3.SESS_LIFETIME) / 1000
        }),
        saveUninitialized: false,
        resave: false,
        cookie: {
          sameSite: true,
          secure: s3.NODE_ENV === "production",
          maxAge: parseInt(s3.SESS_LIFETIME)
        }
      })
    );

    const apiRouter = express.Router();
    app.use("/api", apiRouter);
    apiRouter.use("/users", userRoutes);
    apiRouter.use("/session", sessionRoutes);
    apiRouter.use("/ticket", ticketRoutes);
    apiRouter.use("/management", managementRoutes);

    app.listen(s3.PORT, () => console.log(`Listening on port ${s3.PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
