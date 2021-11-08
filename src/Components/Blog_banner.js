
import React from "react";
import "./Blog_banner.css";
import {useHistory} from 'react-router-dom';



const Blog_banner = ({blog})=>{
    const history = useHistory() ;
    const handleClick = (blog)=>{
        history.push("/"+blog.id)
    }
    return (
        <div className="blog_banner" onClick={()=>handleClick(blog)} >
            <div className="blog_banner_top">
                <div className="blog_banner_top_user">
                    <img src="#" alt="" />
                    {blog.name}
                </div>
                {blog.title}
            </div>
            <div className="blog_banner_body">
                {blog.desc}
            </div>
            <div className="blog_banner_bottom">
                read more
            </div>
        </div>
    )
}

export default Blog_banner ;