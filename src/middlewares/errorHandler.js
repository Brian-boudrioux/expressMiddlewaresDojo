const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json("erreur serveur.");
}

module.exports = errorHandler;