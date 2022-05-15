import { Link } from 'react-router-dom';

export default function BlogCard (props) {
    return(
        <div className="blog-card">
            <div className="blog-title">{props.title}</div>
            <div className="blog-date">{props.date}</div>
            <div className="blog-content">{props.content}</div>
            <div className="blog-tags">
                {props.tags.map( tag => (
                    <div key={tag} className="blog-tag"> {tag} </div>
                ))}
            </div>
            <div className="blog-link"><Link to={`/blogs/${props.link}`}>Read more...</Link></div>      
        </div>
    )
}