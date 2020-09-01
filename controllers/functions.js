const JWT = require("jsonwebtoken");
const tryCatch = require("../middleware/trycatch");
const User = require("../models/user");
const Reservation = require("../models/reservation");
const { jwtSecret } = require("../configuration/index");
const { setupMaster } = require("cluster");

signToken = (user) => {
  return JWT.sign(
    {
      iss: jwtSecret,
      sub: user.id,
      iat: new Date().getTime(), // current time
      exp: new Date().setDate(new Date().getDate() + 1), // current time + 1 day ahead
    },
    jwtSecret
  );
};
module.exports = {
  SignUp: tryCatch(async (req, res, next) => {
    let check = await User.find({ email: req.body.email });
    if (check.length == 0) {
      const { email, password, username } = req.body;
      const newUser = new User({
        username: username,
        email: email,
        password: password,
      });
      await newUser.save();
      return res.status(200).json({ success: true });
    }
    return res.status(403).json({ message: "account already exist" });
  }),
  SignIn: tryCatch(async (req, res, next) => {
    const token = signToken(req.user);
    res.cookie("access_token", token, {
      httpOnly: true,
    });
    return res
      .status(200)
      .json({ success: true, token: token, userdetail: req.user });
  }),
  signOut: (req, res, next) => {
    res.clearCookie("access_token");
    return res.json({ success: true });
  },
  getReservation: tryCatch(async (req, res, next) => {
    const { title, date, hour } = req.body;
    const reservations = await Reservation.find().where({ title, date, hour });
    return res.status(200).json({ success: true, reservations });
  }),
  addReservation: tryCatch(async (req, res, next) => {
    const { reservation } = req.body;
    if (reservation.tickets !== reservation.seats.length)
      return res
        .status(400)
        .json({ message: "No of Seats and selected seats are not the same" });
    const newReservation = new Reservation({
      ...reservation,
      user: req.user._id,
    });
    // console.log(newReservation);
    await newReservation.save();
    return res.status(200).json({ success: true });
  }),
  getAllUserReservation: tryCatch(async (req, res, next) => {
    
    // const user = await User.findById({ _id: req.params.id});
    // if(!user) return res.status(400).json({ message: 'user does not exist'});
    const reservations = await Reservation.find().where({ user: req.params.id});
    // console.log('reservations')
    

    return res.status(200).json({ success: true, reservations})
  }),
  removeReservation: tryCatch(async (req, res, next) => {
    const reservation = await Reservation.findByIdAndDelete({ _id: req.params.id });
    if(!reservation) return res.status(400).json({ message: 'reservation does not exist' });
    const updReservations = await Reservation.find().where({ user: reservation.user })
    console.log(updReservations);
    res.status(200).json({ success: true, reservations: updReservations})
  })
};
