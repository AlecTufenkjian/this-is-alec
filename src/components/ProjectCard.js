export const ProjectCard = (props) => {
    return(
            <div className='card'>
                <img className='card-img-top' src={props.img} alt="project"/>
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
                                <li className="tag" key={props.category.id}>{tag}</li>
                            ))
                        }                        
                    </ul>
                </div>
            </div>
        
    )
}
