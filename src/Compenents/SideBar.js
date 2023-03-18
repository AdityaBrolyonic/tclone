import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import '../Css Files/Header.css'
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list= () => ( 

      <div className='BurgerMenuA' >
    <div className='Cross'>
    <ClearSharpIcon sx={{cursor:'pointer'}} />
    </div>
    <div className='SideNav'>
    <a href='/'>Existing Inventory</a>
    <Divider />
    <a href='/'>Used Inventory</a>
    <Divider />
    <a href='/'>Trade In</a>
    <Divider />
    <a href='/' >Demo Drive</a>
    <Divider />
    <a href='/' >Insurance</a>
    <Divider />
    <a href='/'>Cybertruck</a>
    <Divider />
    <a href='/'>Roadster</a>
    <Divider />
    <a href='/'>Semi</a>
    <Divider />
    <a href='/'>Charging</a>
    <Divider />
    <a href='/'>Powerwall</a>
    <Divider />
    <a href='/'>Commercial Energy</a>
    <Divider />
    <a href='/'>Utilities</a>
    <Divider />
    <a href='/'>Find Us</a>
    <Divider />
    <a href='/' >Support</a>
    <Divider />
    <a href='/' >Investor Relations</a>
    <Divider />
    </div>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}