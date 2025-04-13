class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
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