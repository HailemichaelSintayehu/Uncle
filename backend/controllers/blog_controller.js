const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const BlogPost = require("../models/blogpost")(sequelize, DataTypes);

exports.createBlogPost = async (req, res) => {
    const { blogImg, category, title, description } = req.body;
    if (!blogImg || !category || !title || !description) {
      return res.status(400).send("Missing required fields.");
    }
    try {
      // Create a new blog post entry
      const newBlogPost = await BlogPost.create({
        blogImg,
        category,
        title,
        description,
      });

      // Respond with success and the blog post information
      return res.status(201).json({
        message: "Blog post created successfully.",
        blogPost: newBlogPost,
      });
    } catch (error) {
      console.error("Error creating blog post:", error);
      return res.status(500).send("Could not create blog post.");
    }
};
exports.updateBlogPost = async (req, res) => {
  const {id, blogImg, category, title, description } = req.body;

  if (!blogImg || !category || !title || !description) {
      return res.status(400).send("Missing required fields.");
  }

  try {
      // Find the blog post by id
      const blogPost = await BlogPost.findByPk(id);

      if (!blogPost) {
          return res.status(404).send("Blog post not found.");
      }

      // Update the blog post with new data
      blogPost.blogImg = blogImg;
      blogPost.category = category;
      blogPost.title = title;
      blogPost.description = description;

      // Save the updated blog post
      await blogPost.save();

      // Respond with success and the updated blog post information
      return res.status(200).json({
          message: "Blog post updated successfully.",
          blogPost,
      });
  } catch (error) {
      console.error("Error updating blog post:", error);
      return res.status(500).send("Could not update blog post.");
  }
};

exports.getBlogPosts = async (req, res, next) => {
  try {
    const blogs = await BlogPost.findAll({
      order: [['createdAt', 'DESC']], // Replace 'createdAt' with the field you want to sort by
    });

    return res.status(200).json({ blogs: blogs });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return res.status(500).send("Internal Server error");
  }
};
exports.showBlogPosts = async (req, res, next) => {
  const { id } = req.params; // Get the blog post ID from the request parameters

  try {
    const blogs = await BlogPost.findByPk(id);

    return res.status(200).json({ blogs });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return res.status(500).send("Internal Server error");
  }
};
exports.deleteBlogPost = async (req, res, next) => {
  const { id } = req.params; // Get the blog post ID from the request parameters

  try {
    const blogPost = await BlogPost.findByPk(id); // Find the blog post by its primary key

    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found." }); // Return 404 if the blog post doesn't exist
    }

    await blogPost.destroy(); // Delete the blog post

    return res.status(200).json({ message: "Blog post deleted successfully." }); // Respond with success
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return res.status(500).send("Internal Server error"); // Handle any errors
  }
};

