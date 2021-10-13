import React,{useState} from 'react';
import Signedin from './Signedin';
import Notsignedin from './Notsignedin';
const Navbar = ()=>{
    const [user,setUser] = useState(true)
    return (
        <div class="nav_container">
            {user?<Signedin />:<Notsignedin />}
        </div>
    )
}

export default Navbar ;