import ratingmodel from "../models/rating.model"

exports.findAll  = (req, res) => {
  ratingmodel.find()
    .then((rating) => res.json(rating))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  };



exports.findById  = (req, res) => {
  const id = req.query.id;
  ratingmodel.findOne({ _id: id })
    .then((rating) => res.json(rating))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.add = (req, res) => {
  const payload = req.body;
  const rating = new ratingmodel(payload);
  rating
    .save(res.json(rating))
    .then(res.status(201).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.edit = (req, res) => {
  const payload = req.body;
  ratingmodel.findOneAndUpdate({ _id: payload.ratingId }, { $set: payload })
    .then(res.status(200).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const id = req.query.id;
  console.log(id)
  ratingmodel.findByIdAndDelete(id)
    .then(res.status(200).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
export default  exports;