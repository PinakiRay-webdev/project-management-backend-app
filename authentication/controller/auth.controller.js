import dotenv from "dotenv";
import authDB from "../model/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const isUser = await authDB.findOne({ email });

    if (isUser) {
      res
        .status(400)
        .send({ status: "error", message: "User is already present" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let response = await authDB.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    response = response.toObject();

    delete response.password;

    res.status(201).send({ status: "success", response });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authDB.findOne({ email });

    if (!user) {
      res.status(404).send({
        status: "error",
        message: `user with email id ${email} is not registered`,
      });
      return;
    }

    const verfiedPassword = await bcrypt.compare(password, user.password);

    if (!verfiedPassword) {
      res.status(400).send({ status: "error", message: `Invalid password` });
      return;
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" },
    );

    res.cookie("token", token, { httpOnly: true });

    res.status(200).send({
      status: "success",
      message: "logged in successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};

export const viewProfile = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.status(401).send({ status: "error", message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res
      .status(200)
      .send({ status: 200, message: "user logged out successfully" });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    res.status(200).send({ success: true, user: req.user });
  } catch (error) {
    res.status(401).send({ success: false, message: error.message });
  }
};
