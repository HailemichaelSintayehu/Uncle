const express = require("express");
const blog_controller = require("../controllers/blog_controller");
const router = express.Router();

//register Blog users page route
router.post("/api/createBlog", blog_controller.createBlogPost);
router.get("/api/getBlogs", blog_controller.getBlogPosts);
router.get("/api/showBlogs/:id", blog_controller.showBlogPosts);
router.post("/api/updateBlog", blog_controller.updateBlogPost);
router.delete("/api/deleteBlog/:id", blog_controller.deleteBlogPost);

module.exports = router;
