
import moviemodel from "../models/movie.model"
import ImageSchema from "../models/upload.model";


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

export const upload = async (req,res ) => {
  console.log(req.files)
  const payload = req.files
  const result = []
  const l_PL = payload.length
try {
  for (let i = 0; i <l_PL; i++ ) {
    let image = new ImageSchema(payload[i])
    let images = await image.save();
      result.push(images)
  }
}catch(err) {
    return res.send(err)
}
res.json(result)
};
  
  exports.findAllimage  = (req, res) => {
    ImageSchema.find()
      .then((Image) => res.json(Image))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
    };
export default  exports;
