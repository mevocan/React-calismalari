import React from 'react'
import { connect } from 'react-redux'

const BlogDetailsPage = (props) => {
  return (
   <> <div>Blog Details : {props.blog.title} </div>
    <div>Blog Details : {props.blog.id} </div>
    <div>Blog Details : {props.blog.description} </div>
    </>
  )
}
const mapStateToProps = (state,props)=>{
  return{
    blog: state.blogs.find((blog)=>{
      return blog.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(BlogDetailsPage)