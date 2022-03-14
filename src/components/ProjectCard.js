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
                    {props.category}
                </div>
            </div>
        
    )
}