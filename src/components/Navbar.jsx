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

    const OrangeSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#ff3333',
        '&:hover': {
            backgroundColor: alpha('#e50000', theme.palette.action.hoverOpacity),
        },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#999',
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: '#4c4c4c',
        }
    }));
  
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link className='navbar__link' to ='/posts'>posts</Link>
                <Link className='navbar__link' to ="/about">about</Link>
                <OrangeSwitch 
                {...label}
                checked={checked}
                onChange={handleChange} />
            </div>
        </div>
    )
}
export default Navbar
