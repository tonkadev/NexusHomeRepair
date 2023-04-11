import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

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


 function ButtonAppBar() {
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
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={handleClick}>Home</Button>
          <Button color="inherit" onClick={handleAbout}>About</Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
return <ButtonAppBar />;
}

export default Navbar;