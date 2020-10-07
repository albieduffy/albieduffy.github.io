import React from 'react'
import { connect } from 'react-redux'
import './Projects.css'

class Projects extends React.Component {

  renderProjects = projects => {
    return projects.map((project, index) => {
      return <div key={index} className='project-card'>
        <img src={project.image_url} />
        <a href={project.url}><h3>{project.title}</h3></a>
      </div>
    })
  }

  render() {
    return (
      <div className='projects'>
        {this.props.projects.length > 0 ? this.renderProjects(this.props.projects) : 'No projects to see!'}
      </div>
    )
  }
}

const mSTP = state => ({
  projects: state.projects
})

export default connect(mSTP)(Projects)
