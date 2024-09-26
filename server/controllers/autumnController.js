const autumns = require("../models/autumns");
const Category = require("../models/autumns");

async function GetAutumns(req, res, next) {
  try {
    const autumns = await Autumn.find();
    res.status(200).json(autumn);
  } catch (err) {
    res.status(200).json(err);
  }
}

async function GetAutumnById(req, res) {
  try {
    const SingleAutumn = await Autumn.findById(req.params.id);
    res.status(200).json(SingleAutumn);
  } catch (err) {
    res.status(200).json(err);
  }
}

async function UpdateAutumnById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedAutumn = await Autumn.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedAutumn);
  } catch (err) {
    next(err);
  }
}

async function DeleteAutumnById(req, res, next) {
  try {
    const { id } = req.params;
    await Autumn.findByIdAndDelete(id);
    res.status(200).json("Autumn has been deleted.");
  } catch (err) {
    next(err);
  }
}

async function CreateAutumn(req, res, next) {
  const newAutumn = new Autumn(req.body);
  try {
    const savedAutumn = await newAutumn.save();
    res.status(200).json(savedAutumn);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  GetAutumns,
  GetAutumnById,
  UpdateAutumnById,
  DeleteAutumnById,
  CreateAutumn,
};
