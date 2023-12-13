const { findAll, findOneById, insertOne, updateOne, deleteOne } = require("../models/users.model");

const getAll = async ({ res, next }) => {
  try {
    const [users] = await findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[user]] = await findOneById(id);

    if (user) res.status(200).json(user);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await insertOne(req.body);
    const [[user]] = await findOneById(result.insertId)
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

const putOne = async (req, res) => {
  const {id} = req.params;
  try {
    const [result] = await updateOne(req.body, id);
    if (result.affectedRows > 0) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
}

const removeOne = async (req, res) => {
  const {id} = req.params;
  try {
    const [result] = await deleteOne(id);
    if (result.affectedRows > 0) res.sendStatus(204);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
}

module.exports = { getAll, getOneById, createOne, putOne, removeOne };
