import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { alpha, styled } from '../../../../node_modules/@mui/material/styles';
import Switch from '../../../../node_modules/@mui/material/Switch' ;
import { AuthContext } from '../../../context/context';
import { pink } from '../../../../node_modules/@mui/material/colors';

function Navbar() {
  // const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [checked, setChecked] = useState(false);
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const handleChange = (event) => {
    if(!checked) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
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