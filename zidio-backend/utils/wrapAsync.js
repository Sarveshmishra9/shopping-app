const wrapAsync = (func) => {
  return function (req, res, next) {
    func(req, res, next).catch(next);
  };
};

module.exports = wrapAsync;

/*
It's a utility function that wraps async route handlers to automatically catch errors and forward them to Express’s error handler.
 */
