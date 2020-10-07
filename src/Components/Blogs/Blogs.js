import React from 'react'
import { connect } from 'react-redux'
import './Blogs.css'

class Blogs extends React.Component {

  renderBlogs = blogs => {
    return blogs.map((blog, index) => {
      return <div key={ index } className='blog-post'>
          <h2>{blog.title}</h2>
          <p>{blog.post}</p>
          <h6>{blog.created.slice(0,16)}</h6>
        </div>
    })
  }

  render() {
    return (
      <div className='blogs'>
        {this.props.blogs.length > 0 ? this.renderBlogs(this.props.blogs) : 'No posts to see!'}
      </div>
    )
  }
}

const mSTP = state => ({
  blogs: state.blogs
})

export default connect(mSTP)(Blogs);
