import Card from 'react-bootstrap/Card';
import projectData from '../projects.json'
import github from '../assets/icons8-github.svg'
import './icons.css'
import './Projects.css'

function generateTags(stack) {
    const tags = []
    for (var i=0; i < stack.length; i++) {
        tags.push(
            <div className='project-card-tag' key={i}>
                {stack[i]}
            </div>
        )
    }
    return tags;
}

function generateGithubLink(link) {
    if (link !== "None") {
        if (link === "Contact me for repo!") {
            return (
                <Card.Text className='project-card-text'>(Contact me for repo!)</Card.Text>
            )
        }
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <Card.Img src={github} className='project-card-github github-icon icon' id='github-project'/>
            </a>
        )
    }
}

function ProjectCard(props) {
    return (
        <Card className='project-card' style={{ width: '40vw' }}>
            <Card.Img className='project-img' id={props.project.title + '-img'} src={props.project.image} variant="top"/>
            <Card.Body className='project-card-body'>
                <div className='project-card-title-and-github'>
                    <Card.Title className='project-card-title'>{props.project.title}</Card.Title>
                    {generateGithubLink(props.project.github_link)}
                </div>
                <div className='project-card-tag-group'>
                    {generateTags(props.project.techStack)}
                </div>
                <Card.Text className='project-card-text' id='project-card-description'>{props.project.description}</Card.Text>
            </Card.Body>
          </Card>
    )
}

export default function Projects() {
    const getProjectData = projectData.map(
        (project) => {
          return (
            <ProjectCard key={project.title} project={project}></ProjectCard>
          )
        }
    )

    return (
        <div className="project-section">
            {getProjectData}
        </div>
    );
};
