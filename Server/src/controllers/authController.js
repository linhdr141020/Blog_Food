import User from "../models/User";
import bcrypt from "bcryptjs";

const Signup = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      res.status(500).json({ message: "Missing input parameters" });
    }
    console.log(123);
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    next(error);
  }
};

const Signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!req.body.username || !req.body.password) {
      res.status(500).json({ message: "Missing input parameters" });
    }
    if (!user) {
      res.status(500).json({ message: "Username is not exist!!1" });
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json({ message: "Wrong Password" });
    }
    console.log(user._doc);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  Signup,
  Signin,
};
