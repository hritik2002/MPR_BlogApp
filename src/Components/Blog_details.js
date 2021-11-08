import React from "react";
import { useParams } from "react-router";
import blogs from '../data.json'
const Blog_details = ()=>{
    const params = useParams();
    console.log(blogs)
    const id = Number(params.id)
    return (
        <div className="blog_details">
            {blogs[id].title}
            <br />
            {blogs[id].name}
            <br />
            {blogs[id].desc}
        </div>
    )
}

export default Blog_details ;