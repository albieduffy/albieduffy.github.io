const url = 'https://albieduffy-portfolio.herokuapp.com'

const addBlogs = (blogs) => ({
  type: 'ADD_BLOG',
  payload: blogs
})

const addProjects = (projects) => ({
  type: 'ADD_PROJECT',
  payload: projects
})

export const fetchBlogs = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/blogs`)
      const blogs = await response.json()
      dispatch(addBlogs(blogs))
    } catch (err) {
      console.warn(err.message)
    }
  }
}

export const fetchProjects = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/projects`)
      const projects = await response.json()
      dispatch(addProjects(projects))
    } catch (err) {
      console.warn(err.message)
    }
  }
}
