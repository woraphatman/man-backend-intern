
import moviemodel from "../models/movie.model"
import ImgSchema from "../models/upload.model";


exports.findAll  = (req, res) => {
  moviemodel.find()
    .then((Movie) => res.json(Movie))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  };



exports.findById  = (req, res) => {
  const id = req.query.id;
  moviemodel.findOne({ _id: id })
    .then((Movie) => res.json(Movie))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.add = (req, res) => {
  const payload = req.body;
  const movie = new moviemodel(payload);
  movie
    .save(res.json(movie))
    .then(res.status(201).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.edit = (req, res) => {
  const payload = req.body;
  moviemodel.findOneAndUpdate({ _id: payload.movieId }, { $set: payload })
    .then(res.status(200).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const id = req.query.id;
  console.log(id)
  moviemodel.findByIdAndDelete(id)
    .then(res.status(200).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.upload = (req, res) => {
  console.log(req.files)
  console.log(req.body)
  const payload = req.body
  const img = new ImgSchema(payload)
  img
  .save(res.send(req.files))
  .then(res.status(201).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    })
  };
export default  exports;
