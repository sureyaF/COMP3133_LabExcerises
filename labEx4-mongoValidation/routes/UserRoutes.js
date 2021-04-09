const express = require('express');
const app = express();

const userModel = require('../model/User');



app.post('/users', async (req, res) => {
    const user = new userModel(req.body);
    try {
      await user.save((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send(user);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = app