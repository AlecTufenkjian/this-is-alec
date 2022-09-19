import React from 'react';
import styled from 'styled-components';
import BlogCard from '../components/BlogCard';
import BlogData from '../assets/content/blogs.json';

const BlogCardStyle = styled.div`
    .blogs {
        margin-top: 100px;
    }

    .blog-card {
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;
        background-color: var(--black);
        width: 80%;
        max-width: 700px;
        border-radius: 0.6em;  
        transition: all ease 200ms;      
    }

    .blog-card:hover {
        transform: scale(1.03);
    }

    .blog-title {
        font-size: 2.6rem;
        font-weight: 700;
    }

    .blog-date{
        color: var(--steel-teal);
        font-size: 1.4rem;
    }

    .blog-content{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 1.4rem;
        line-height: 165%;     
    }

    .blog-btn{
        display: block;
        width: fit-content;
        background: var(--white);
        margin: auto;
        margin-bottom: 10px;
        color: var(--black);
        border-radius: 8px;
        padding: 0.4em 2em;
        cursor: pointer;
    }

    .blog-tag{
        display: inline;  
        padding: 5px;
        background-color: var(--steel-teal);
        border-radius: 0.6em;
        margin-right: 5px;
        margin-left: 5px;
    }
    
    .blog-link{
        width: fit-content;
        margin: 30px auto;
        margin-bottom: 10px;

        a{
            background: white;
            color: black;
            padding: 0.7em 2em;
            border-radius: 1em;
        }
    }

    @media only screen and (max-width: 700px) {
        .blog-card{
            width: 400px;
        }
    }

    @media only screen and (max-width: 500px) {
        .blog-card{
            width: 90%;
        }
    }
`;

export default function Blogs() {
  return (
    <BlogCardStyle>
        <div className='blogs'>
            {BlogData.blogs.map( blog => (
                <BlogCard key={blog.id} title={blog.title} content={blog.content} tags={blog.tags} date={blog.date} link={blog.id}/>
            ))}
        </div>            
    </BlogCardStyle>
  );
}