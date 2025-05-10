class ExpressError extends Error {
  constructor({ status = 500, message = "Something went wrong" }) {
    super(message);
    this.status = status;
  }
}

module.exports = ExpressError;

/*
Express handlers (whether route, middleware, or error handlers) are the backbone of clean, modular Express architecture. They:

Keep your app maintainable

Improve error consistency

Enable clean separation of concerns

Help scale and secure your backend

*/

