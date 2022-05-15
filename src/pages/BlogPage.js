import React from "react";
import { useParams } from "react-router-dom";
import BlogData from '../assets/content/blogs.json';

const BlogPage = (props) => {

  const { blogId } = useParams();

  const blog = BlogData.blogs.find(potentialBlog => potentialBlog.id === blogId);

  return (
    <>
      <div className="blog-container" style={{marginTop: '100px'}}>
        <div className="blog-title">{blog.title}</div>
        <div className="blog-date">{blog.date}</div>
        <div className="blog-content">{blog.content}</div>
        <div className="blog-tags">{blog.tags}</div>
      </div>
    </>
  );
}

export default BlogPage;