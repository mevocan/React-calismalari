import { push, ref,get, remove, update } from 'firebase/database';
import database from '../firebase/firebaseConfig';

//ACTİON
export const addBlog = (blog) =>({
    type:"ADD_BLOG",
    blog
})
export const addBlogToDatabase=(blogData={})=>{
    return(dispatch)=>{
        const {title="",description="",dateAdded=0}=blogData

        const blog = {title,description,dateAdded}

        push(ref(database,"blogs"),blog).then((res)=>{
            dispatch(addBlog({
            id:res.key,
            ...blog}))
        })
    }
}

export const removeBlog = ({id})=>(
        {
            type:"REMOVE_BLOG",
            id:id
        }
    
)
export const removeBlogFromDatabase=(id)=>{
    return (dispatch)=>{
        return remove((ref(database,"blogs/"+id))).then(()=>{dispatch(removeBlog(id))})
    }
}

export const editBlog = (id,updates) =>({
    type:"EDIT_BLOG",
    id,
    updates

})

export const editBlogFromDataBase = (id,updates)=>{
    return(dispatch)=>{
        return update(ref(database,"blogs/"+id),updates).then(()=>{
            dispatch(editBlog(id,updates))
        })
    }
}

export const setBlog = (blogs)=>({
    type:"SET_BLOGS",
    blogs
})

export const getBlogsFromDatabase =() =>{
    return(dispatch)=>{
        const blogRef= ref(database,"blogs")
        return get(blogRef,"value").then((snapshot)=>{
            const blogs=[]

            snapshot.forEach((blog)=>{
                blogs.push({
                    id:blog.key,
                    ...blog.val()
                })
            })
            dispatch(setBlog(blogs))
        })
    }
}
export const clearBlogs = () =>({
    type:"ClEAR_BLOGS",
    
})