import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route, NavLink } from 'react-router-dom';
import { About, Projects, Blogs, Private } from './Components/index.js'
import { fetchBlogs, fetchProjects } from './Actions/PortfolioActions'

class App extends React.Component {

  componentDidMount() {
    this.props.loadBlogs()
    this.props.loadProjects()
  }

  render() {
    return (
      <div className="App">
        <nav className='nav-bar'>
          <div className='page-links'>
            <h1>Albie Duffy</h1>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
          </div>
          <div className='social-links'>
            <ul>
              <li><a href="https://github.com/albieduffy"><i className="fab fa-github fa-lg"></i></a></li>
              <li><a href="https://www.linkedin.com/in/albieduffy/"><i className="fab fa-linkedin fa-lg"></i></a></li>
              <li><a href="https://www.instagram.com/albieduffy/"><i className="fab fa-instagram fa-lg"></i></a></li>
              <li><a href="/private"><i className="fas fa-lock fa-lg"></i></a></li>
            </ul>
          </div>
        </nav>
        <div className='main'>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/blog' component={Blogs} />
            <Route path='/private' component={Private} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mDTP = dispatch => ({
  loadBlogs: () => dispatch(fetchBlogs()),
  loadProjects: () => dispatch(fetchProjects())
})

export default connect(null, mDTP)(App);
