import React from 'react'
import {Link} from 'react-router-dom'
import './MainNavigation.css'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks';
const MainNavigation = (props)=> {
    return (
        <MainHeader>
            <h1> 
               <Link to='/'> your posts </Link> 
            </h1>
            <nav>
               <NavLinks/>
            </nav>
        </MainHeader>
    )
}
export default MainNavigation 