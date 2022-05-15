import { Link } from 'react-router-dom';

export const SmallProjectCard = (props) => {
    return(
        <div className="project" style={{backgroundImage: 'url( ' + props.img + ')'}}>
            <Link to={`blogs/${props.link}`}>
                <div className='overlay'></div>
                <div className='project-item head'>
                    <p>{props.title}</p>
                    <hr className='hr'/>
                </div>
                <div className='project-item short-description'>
                    <p>
                        {props.summary}
                    </p>
                </div>
            </Link>
      </div>  
    )
}
