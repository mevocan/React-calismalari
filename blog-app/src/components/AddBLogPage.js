import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import {addBlogToDatabase} from '../actions/blogs'

const AddBLogPage = (props) => {
  return (
    <div>
        <h1>AddBLogPage </h1>
        <BlogForm onSubmit={(blog)=>{
          props.dispatch(addBlogToDatabase(blog))
          props.history.push("/blogs")
        }}/>
    </div>
  )
}

export default connect()(AddBLogPage)