var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//cors
//const cors = require("cors");

const dotenv = require("dotenv");
const { secured } = require("./middlewares/auth");
dotenv.config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const auth = require("./routes/auth");
const perfil = require("./routes/perfil");
const registro = require("./routes/registro");

//var usersRouter = require("./routes/users");
const personas = require("./routes/personas");
const categorias = require("./routes/categorias");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//app.use(cors()); //usando el cors
app.use("/", indexRouter);
app.use("/auth", auth);
//aplicamos el middelware
app.use("/perfil", secured, perfil);
app.use("/registro", registro);
app.use("/users", usersRouter);

app.use("/personas", personas); // http://localhost:3000/personas
app.use("/categorias", categorias);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ message: "Página no encontrada" });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
