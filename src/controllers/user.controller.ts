
import usermodel from "../models/user.model"
import users from "../models/login.model"
exports.findAll  = (req, res) => {
  usermodel.find()
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  };



exports.findById  = (req, res) => {
  const id = req.query.id;
  usermodel.findOne({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.add = (req, res) => {
  const payload = req.body;
  const user = new usermodel(payload);
  user
    .save(res.json(user))
    .then(res.status(201).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.edit = (req, res) => {
  const payload = req.body;
  usermodel.findOneAndUpdate({ _id: payload.userId }, { $set: payload })
    .then(res.status(200).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const id = req.query.id;
  console.log(id)
  usermodel.findByIdAndDelete(id)
    .then(res.status(200).end())
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


exports.postjwt= (req, res) => {


  if (req.users !== 'admin') {
      return res.sendStatus(403);
  }


  const login = req.body;
  users.push(login);

  res.send(' added successfully');
};


exports.get = (req, res) => {
 res.json(users)
  };
export default  exports;