import React from "react";
import { useParams } from "react-router-dom";
import BlogData from '../assets/content/blogs.json';
import styled from 'styled-components';

const BlogPageStyle = styled.div`
  svg{
    margin-top: 100px;
  }

  .blog-wave{
    transform: translateY(10px);
  }

  .blog-container{
    background: black;
    padding-top: 50px;
    height: 100vh;
  }

  .blog{
    max-width: 800px;
    margin: auto;
  }

  .blog-title{
    font-size: 3.6rem;
  }

  .blog-date{
    color: var(--steel-teal);
    margin-bottom: 20px;
    font-size: 1.4rem;
  }

  .blog-content{
    font-size: 1.4rem;
    line-height: 165%;
    margin-bottom: 20px;
  }

  .blog-tag{
    display: inline;  
    padding: 5px;
    background-color: var(--steel-teal);
    border-radius: 0.6em;
    margin-right: 5px;
    margin-left: 5px;
  }

  @media only screen and (max-width: 850px) {
    .blog{
      margin: 0 25px 0 25px;
    }
  }
`;

const BlogPage = (props) => {

  const { blogId } = useParams();

  const blog = BlogData.blogs.find(potentialBlog => potentialBlog.id === blogId);

  return (
    <BlogPageStyle>
      <div className="blog-wave">
        <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" className="Hero__Swoops-sc-13y35jq-4 laHbQG"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
      </div>
      <div className="blog-container">
        <div className="blog">
          <div className="blog-title">{blog.title}</div>
          <div className="blog-date">{blog.date}</div>
          <div className="blog-content">{blog.content}</div>
          <div className="blog-tags">                
            {blog.tags.map( tag => (
                <div key={tag} className="blog-tag"> {tag} </div>
            ))}
          </div>
        </div>
      </div>
    </BlogPageStyle>
  );
}

export default BlogPage;