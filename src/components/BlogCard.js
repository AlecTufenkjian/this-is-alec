export default function BlogCard (props) {
    return(
        <div className="blog-card">
            <div className="blog-title">{props.title}</div>
            <div className="blog-date">{props.date}</div>
            <div className="blog-content">{props.content}</div>
            {/*<a href="/blog/blank" className="blog-btn">Continue reading...</a>*/}
            <div className="blog-tags">
                {props.tags.map( tag => (
                    <div className="blog-tag"> {tag} </div>
                ))}
            </div>
        </div>
    )
}