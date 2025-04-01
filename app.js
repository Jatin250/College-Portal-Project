require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const web = require("./routes/web");
const connectDb = require("./database/connectDB");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const GoogleStratagy = require("passport-google-oauth20").Strategy;

// messages
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

// for google
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStratagy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((udata, done) => done(null, udata));
passport.deserializeUser((udata, done) => done(null, udata));

// token get from cookie
app.use(cookieParser());

// image upload
app.use(fileUpload({ useTempFiles: true }));

// flash message
app.use(flash());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// css image js link public
app.use(express.static("public"));

// view ejs set
app.set("view engine", "ejs");

// connect Database
connectDb();

// route load
app.use("/", web);
// server create
app.listen(port, () => {
  console.log(`server start localhost:${port}`);
});
