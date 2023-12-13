const db = require("../config/database");

const findAll = () => {
  return db.query("SELECT * FROM users");
};

const findOneById = (id) => {
  return db.query("SELECT * FROM users WHERE id=?", [id]);
};

const findOneByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE email=?", [email]);
}

const insertOne = ({email, password, role}) => {
  return db.query("INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
  [email, password, role]);
}

const updateOne = (user, id) => {
  return db.query("UPDATE users SET ? WHERE id = ?", [user, id]);
}

const deleteOne = (id) => {
  return db.query("DELETE FROM users WHERE id = ?", [id]);
}

module.exports = { findAll, findOneById, insertOne, findOneByEmail, updateOne, deleteOne };
