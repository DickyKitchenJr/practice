import { Post } from "../models/post.model.js";

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (age < 1 || age > 120) {
      return res.status(400).json({ message: "Age must be between 1 and 120" });
    }

    const post = await Post.create({ name, description, age });
    // Alternative way to create and save a post where steps can be put between creation and saving if needed
    // const post = new Post({ name, description, age });
    //other stuff would go here
    // await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ message: "Posts retrieved successfully", posts });
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    if(Object.keys(req.body).length === 0){
      return res.status(400).json({ message: "At least one field is required to update" });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully", post });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { createPost, getAllPosts, updatePost, deletePost };
