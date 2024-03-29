import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    // express error handling for async func
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //below we are removing the password from the res and sending all other info
    const { password: pass, ...rest } = validUser._doc;
    // Calculate the expiration time (one year from now)
    const expirationTime = new Date();
    expirationTime.setFullYear(expirationTime.getFullYear() + 1);
    res
      .cookie("access_token", token, {
        expires: expirationTime,
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    // Express.js error handler
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { name, email, photo } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      // if the user exists we save it authenticate the user and sign in the user and save it in  cookie-token-
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      // Calculate the expiration time (one year from now)
      const expirationTime = new Date();
      expirationTime.setFullYear(expirationTime.getFullYear() + 1);
      res
        .cookie("access_token", token, {
          expires: expirationTime,
          httpOnly: true,
        })
        .status(200)
        .json(rest);
    } else {
      //if the user doesn't exist  we create the user
      //in google auth no password is provided so we create  a random password
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-8),
        email,
        password: hashedPassword,
        avatar: photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      // Calculate the expiration time (one year from now)
      const expirationTime = new Date();
      expirationTime.setFullYear(expirationTime.getFullYear() + 1);
      res
        .cookie("access_token", token, {
          expires: expirationTime,
          httpOnly: true,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("You have been logged Out !");
  } catch (error) {
    next(error);
  }
};
