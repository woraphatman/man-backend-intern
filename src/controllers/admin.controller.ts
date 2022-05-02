const adminmodel = require("../models/admin.model");

exports.findAll  = (req, res) => {
  adminmodel.find()
    .then((admin) => res.json(admin))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  };



exports.findById  = (req, res) => {
  const id = req.query.id;
  adminmodel.findOne({ _id: id })
    .then((admin) => res.json(admin))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.add = (req, res) => {
  const payload = req.body;
  const admin = new adminmodel(payload);
  admin
    .save(res.json(admin))
    .then(res.status(201).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.edit = (req, res) => {
  const payload = req.body;
  adminmodel.findOneAndUpdate({ _id: payload.adminId }, { $set: payload })
    .then(res.status(200).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const id = req.query.id;
  console.log(id)
  adminmodel.findByIdAndDelete(id)
    .then(res.status(200).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};