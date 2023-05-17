import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

import logo from './nexuscanvalogo.png';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Define handleClick function
  function handleClick() {
    // Navigate to a different route
    navigate("/");
    setOpen(false);
  }

  function handleServices() {
    // Navigate to a different route
    navigate("/services");
    setOpen(false);
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      text: 'Home',
      onClick: handleClick,
    },
    {
      text: 'Services',
      onClick: handleServices,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            {!isMobile ? (
              // Desktop menu items
              <>
                <Button color="inherit" onClick={handleClick}>Home</Button>
                <Button color="inherit" onClick={handleServices}>Services</Button>
              </>
            ) : (
              // Mobile menu
              <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <List>
                  {menuItems.map((item) => (
                    <ListItem button key={item.text} onClick={item.onClick}>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <Avatar alt="Remy Sharp" src={logo} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: '15px' }}>
        Call (480) 331-4840
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        nexushomerepair@gmail.com
      </Typography>
    </Box>
  );
}

export default Navbar;
