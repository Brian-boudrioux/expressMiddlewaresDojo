const { findOneByEmail } = require("../models/users.model");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

const validateUser = async (req, res, next) => {
  const { email, password, role } = req.body;

  if (
    !role ||
    (String(role).toUpperCase() != "USER" &&
      String(role).toUpperCase() != "ADMIN")
  )
    res.status(400).json("role should defined !");
  else if (!email || !emailRegex.test(email))
    res.status(400).json("You should specify a valid email");
  else if (!password || !passwordRegex.test(password))
    res.status(400).json("password should contains at least blablaba");
  else {
    const [[user]] = await findOneByEmail(email);
    if (user)
      res.status(400).json("user with the specified email already exist.");
    else
      next();
  }
}

const validateUserUpdate = async (req, res, next) => {
  const { email, password, role } = req.body;

  if (role && (String(role).toUpperCase() != "USER" &&
      String(role).toUpperCase() != "ADMIN"))
    res.status(400).json("role should be USER or ADMIN");
  else if (email && !emailRegex.test(email))
    res.status(400).json("You should specify a valid email");
  else if (password && !passwordRegex.test(password))
    res.status(400).json("password should contains at least blablaba");
  else {
    const [[user]] = await findOneByEmail(email);
    if (user)
      res.status(400).json("user with the specified email already exist.");
    else
      next();
  }
}

module.exports = {validateUser, validateUserUpdate};