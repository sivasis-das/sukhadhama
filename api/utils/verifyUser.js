import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  //if no token
  if (!token) return next(errorHandler(401, "Unauthorized"));

  // when token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    //we are sending the user id in req.
    req.user = user;
    next();
  });
};
