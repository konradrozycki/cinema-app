require("express");
const router = require("express-promise-router")();
const passport = require("passport");
require("../passport");
const Controller = require("../controllers/functions");
const passportUserSignIn = passport.authenticate("local", { session: false });
const passportJWT = passport.authenticate("user", { session: false });

router.route("/signup").post(Controller.SignUp);
router.route("/signin").post(passportUserSignIn, Controller.SignIn);
router.route("/signout").post(passportJWT, Controller.signOut);

router.route("/getreservation").post(Controller.getReservation);
router.route("/addreservation").post(passportJWT, Controller.addReservation);
router.route("/getuserreservations/:id").get(Controller.getAllUserReservation);
router.route("/removereservation/:id").delete(Controller.removeReservation)

module.exports = router;
