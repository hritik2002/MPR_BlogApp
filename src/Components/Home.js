import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer/Footer';
import userDashboard from './UserDashboard/userDashboard.js';
import Blog_banner from './Blog_banner';
import data from '../data.json'
const Home = ()=>{
    return (
        <div class="Home_container" >
            <Navbar />
            <userDashboard />
            {data.map((blog,index)=><Blog_banner blog={blog} key={blog.id} />)}
            <Footer />
        </div>
    )
}

export default Home ;

