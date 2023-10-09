import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { HiMiniBars3 } from "react-icons/hi2";
import "./Drawer.css"


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    //   sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      
          <ListItem sx={{display:"flex",flexWrap:"wrap",width:"180px"}} disablePadding>
            <ListItemButton>
            Sign in/sign up                   
              <ListItemText/> 
            </ListItemButton>
            <ListItemButton>
            Search Bus               
              <ListItemText/> 
            </ListItemButton>
            <ListItemButton>
            About us                
              <ListItemText/> 
            </ListItemButton>
            <ListItemButton>
            Cancel Tickets                   
              <ListItemText/> 
            </ListItemButton>
            <ListItemButton>
            Get Ticket Details                   
              <ListItemText/> 
            </ListItemButton>
          </ListItem>
       
      </List>
      <Divider />
     
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)} style={{border:"none",backgroundColor:"white",fontSize:"18px"}}>
          <HiMiniBars3/>
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}

          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}