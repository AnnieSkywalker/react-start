import { pink } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/context';

function Navbar() {
    const [checked, setChecked] = useState(null);
    const {isAuth, setIsAuth} = useContext(AuthContext);

    useEffect(()=> {
        setChecked(localStorage.getItem('auth') ? true : null)
    }, [])

    const handleChange = (event) => {
        if(!checked) {
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
        } else {
            setIsAuth(false);
            localStorage.removeItem('auth');
        }
        setChecked(event.target.checked);
    };

    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
        },
    }));
  
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link className='navbar__link' to ='/posts'>posts</Link>
                <Link className='navbar__link' to ="/about">about</Link>
                <PinkSwitch 
                {...label}
                checked={checked}
                onChange={handleChange} />
            </div>
        </div>
    )
}
export default Navbar
