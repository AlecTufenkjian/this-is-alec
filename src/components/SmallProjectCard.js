export const SmallProjectCard = (props) => {
    return(
  
        <a href='/#/projects' className="project" style={{backgroundImage: 'url( ' + props.img + ')'}}>
            <div className='overlay'></div>
            <div className='project-item head'>
                <p>{props.title}</p>
                <hr className='hr'/>
            </div>
            <div className='project-item short-description'>
                <p>
                    This is the placeholder for the short description. It would concisly describe the project.
                </p>
            </div>
      </a>  
    )
}
