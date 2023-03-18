import React from 'react'
import '../Css Files/Header.css'
import { useState } from 'react';
import { selectCars } from '../CarSlice/carSlice';
import { useSelector} from "react-redux";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import Drawer from '@mui/material/Drawer';

function Header() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list= (anchor) => ( 
    <div className='BurgerMenuA' >
    <div className='Cross'>
    <ClearSharpIcon sx={{cursor:'pointer'}} onClick={toggleDrawer(anchor, false)}/>
    </div>
    <div className='SideNav'>
    <a href='/'>Existing Inventory</a>
    <a href='/'>Used Inventory</a>
    <a href='/'>Trade In</a>
    <a href='/' >Demo Drive</a>
    <a href='/' >Insurance</a>
    <a href='/'>Cybertruck</a>
    <a href='/'>Roadster</a>
    <a href='/'>Semi</a>
    <a href='/'>Charging</a>
    <a href='/'>Powerwall</a>
    <a href='/'>Commercial Energy</a>
    <a href='/'>Utilities</a>
    <a href='/'>Find Us</a>
    <a href='/' >Support</a>
    <a href='/' >Investor Relations</a>
    </div>
    </div>);


  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <div className='Head'>
          <a href='Home.js'><img src='../Images/logo.svg' alt=''></img></a>
        <div className='Nav'>
          <a href='/' className='link'>Model 3</a>
          <a href='/' className='link'>Model S</a>
          <a href='/' className='link'>Model X</a>
          <a href='/' className='link'>Model Y</a>
          <a href='/' className='link'>Solar Panel</a>
          <a href='/' className='link'>Solar Roof</a>
        </div>

    <div className='Menu'>
      <a href='/' className='link'>Shop</a>
      <a href='/' className='link'>Account</a>

      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
     <MenuSharpIcon fontSize='small' sx={{ width:20, height:20, m:0.5, cursor:'pointer'}} onClick={toggleDrawer(anchor, true)}/>  
     <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
      {list}
          </Drawer>
        </React.Fragment>
      ))} 
    </div>

    <div className='Menu2'>
    {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
     <MenuSharpIcon fontSize='small' sx={{ width:20, height:20, m:0.5, cursor:'pointer'}} onClick={toggleDrawer(anchor, true)}/>  
     <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
      {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}   
    </div>    
    </div>

  )
}

export default Header