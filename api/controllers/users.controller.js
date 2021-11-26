const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

function getAllUsers(req, res, next) {
  User.find({})
    .then((result) => res.send(result))
    .catch((err) => next(err));

  /* try {
    result = await User.find({});
    res.send(result);
  } catch (err) {
    next(err);
  } */
}

function addUser(req, res, next) {
  const user = req.body;
  if (!user.name || !user.passwd) {
    next(new Error());
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  user.passwd = bcrypt.hashSync(user.passwd, salt);

  const newUser = User.create(user);
  newUser
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
}

function getUserById(req, res, next) {
  if (!req.params.id) {
    next(new Error('Invalid id'));
    return;
  }
  User.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
}

function updateUser(req, res, next) {
  if (!req.params.id) {
    next(new Error('Invalid id'));
    return;
  }
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => next(err));
}

function deleteUser(req, res, next) {
  User.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (result) {
        res.status(202).json({ deletedId: req.params.id });
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    })
    .catch((err) => next(err));
}

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
};
