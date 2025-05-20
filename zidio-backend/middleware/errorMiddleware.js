const errorMiddleware = (err, req, res, next) => {
  console.log("error in errorMiddleware", err);
  console.log("loggin error stack", err.stack);
  res.status(err.status).json({ message: err.message, name: err.name });
};

module.exports = errorMiddleware;
