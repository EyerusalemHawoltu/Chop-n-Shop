import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Chop n' Shop
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/items">Items</Button>
        <Button color="inherit" component={Link} to="/add-item">Add Item</Button>
        <p color="inherit" component={Link} to="/recipes">Recipes S</p>
        <p color="inherit" component={Link} to="/shopping-list">  hopping List</p>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
