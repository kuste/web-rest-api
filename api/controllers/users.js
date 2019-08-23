const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

exports.user_signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            })
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
              dateRegistered: new Date()
            })
            user
              .save()
              .then(result => {
                console.log(result)
                res.status(201).json({
                  message: "User created"
                })
              })
              .catch(err => {
                console.log(err)
                res.status(500).json({
                  error: err
                })
              })
          }
        })
      }
    })
}

exports.user_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Email or password is incorrect!"
        })
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Email or password is incorrect!"
          })
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            "KOBIeayKqh5UXNpOMyOUAry4WK1NjopjukFokAnkssXYpiKJki1TFi-JQTkBN45n1L2eHAX1WpuB-k1Oc7Zq9mn-MRPDHEHdu9-jKRVreXZ04ZG9cnu7HTzWVkNMqqcYcs--qny623yEVsScDOb-aJ8QAIDWlsCASshp4BD_GoqkX25ml7T5bNB3lu5aMkxlQVmdcnhX3B_OqlSZJmeWi24ydyAkuqFvOJAES4gPuu-HQPVzJk-QcVF7zYJOfUEXLA6T5N14i9Z4N6X8366R6NV8rPpNY2861QAjIyKQvpF_FtxskytWJ_oPMIukpy940NwbUWjusik4_rSqKR0VoQ",
            {
              expiresIn: "1h"
            }
          )
          return res.status(200).json({
            message: "Auth successful",
            id: user[0]._id,
            firstName: user[0].firstName,
            lastName: user[0].lastName,
            email: user[0].email,
            token: token
          })
        }
        res.status(401).json({
          message: "Auth failed , please check your credentials and try again."
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}

/* exports.user_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}
 */
exports.user_update = (req, res, next) => {
  const id = req.params.userId
  if (req.body.password) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err
        })
      } else {
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash
        })

        User.updateOne({ _id: id }, { $set: user })
          .exec()
          .then(result => {
            res.status(200).json({
              message: "User updated",
              updatedUser: req.body
            })
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({
              error: err
            })
          })
      }
    })
  } else {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })

    User.updateOne({ _id: id }, { $set: user })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "User updated",
          updatedUser: req.body
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          error: err
        })
      })
  }
}
