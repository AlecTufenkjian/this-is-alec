import { Link } from 'react-router-dom';

export const ProjectCard = (props) => {
    return(      
        <div className='card' >
            <Link to={`/blogs/${props.link}`}>
                <img className='card-img-top' src={props.img} alt="project" style={{height: "300px"}}/>
                <div className='card-body'>
                    <div className='card-title'>{props.title}</div>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className='card-footer'>
                    <ul className="tags">
                        {
                            props.category.map((tag) => (
                                <li className="tag" key={tag}>{tag}</li>
                            ))
                        }                        
                    </ul>
                </div>
            </Link>
        </div>
    )
}
