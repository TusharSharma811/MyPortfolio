
const ProjectCard = ({title , description, imgSRC, githubURL, liveURL} : {title: string, description: string,imgSRC: string, githubURL: string, liveURL: string}) => {
  return (
    <>
        <div className='min-h-fit mt-6 mb-6 border-2 border-accent p-3 rounded-md hover:scale-105 duration-300'>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imgSRC} alt={title} className='mt-2 rounded-md object-cover h-[40%] w-[80%] mx-auto' />
            <div className='flex justify-between mt-2'>
                <a className='link-underline' href={githubURL}>GitHub</a>
                <a className='link-underline' href={liveURL}>Live Demo</a>
            </div>
        </div>
    </>
  )
}

export default ProjectCard