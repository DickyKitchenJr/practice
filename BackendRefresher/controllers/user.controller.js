import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    //establish what is to be expected from the request body
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //check if the username or email already exists in the database
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Username or email already exists" });
    }

    //create a new user in the database
    const user = await User.create({
      username,
      password,
      email,
      loggedIn: false, //not currently in the schema, remove later?
    });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { registerUser };
