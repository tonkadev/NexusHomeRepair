import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import AdbIcon from '@mui/icons-material/Adb';
import Phone from '@mui/icons-material/Phone';
import Avatar from '@mui/material/Avatar';
import logo from './nexuscanvalogo.png'

//import logo from './myAvatar.png';

function Navbar(){

  const navigate = useNavigate(); 
  
  // Define handleClick function
  function handleClick() {
    // Navigate to a different route
    navigate("/");;
  }


  function handleAbout() {
    // Navigate to a different route
    navigate("/about");;
  }

  function handleServices() {
    // Navigate to a different route
    navigate("/services");;
  }

  function ButtonAppBar() {
    const isMobile = window.innerWidth < 600; // determine if it's mobile view

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {!isMobile && (
              <React.Fragment>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  {/* <MenuIcon /> */}
                </IconButton>
                <Button color="inherit" onClick={handleClick}>Home</Button>
                <Button color="inherit" onClick={handleServices}>Services</Button>
                <Button color="inherit" onClick={handleAbout}>About</Button>
              </React.Fragment>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <Avatar alt="Remy Sharp" src={logo} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
           Call (480) 331-4840
        </Typography>
      </Box>
    );
  }

  return <ButtonAppBar />;
}

export default Navbar;
