import React, { Component } from 'react'
import {Link} from "react-router-dom"
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='home_container'>
                <div className='home_side_left'></div>
                <div className='home_side_right'>
                    <div className='title'>
                         <h2>Recipe Study App</h2>
                   </div>
                    <form className='form'>
                     <input type='email'  placeholder='Email'/>
                        <input type='password' placeholder='Pasword' />
                        <Link to="/pies">
                            <button>Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Home;