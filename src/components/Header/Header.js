import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar/Avatar';
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
        <Link to='/'>
            <img className='header__logo' src={process.env.PUBLIC_URL + 'airbnblogo.png'} alt=""/>
        </Link>
            <div className='header__center'>
                <input type='text'/>
                <SearchIcon/>
            </div>

            <div className='header__right' >
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>

        </div>
    )
}

export default Header
