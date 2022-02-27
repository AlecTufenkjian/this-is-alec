import styled from 'styled-components';


export const ProjectCard = (props) => {
    return(
            <div className='card'>
                <img className='card-img-top' src={'https://picsum.photos/400/200'} />
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