import React from 'react';
import { Link } from "react-router-dom";

// Importing individual components from MUI
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';

// Importing multiple components from MUI
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material/';

// From MUI Icons
import MenuIcon from '@mui/icons-material/Menu';

// From Styled Components
import styled from "styled-components";

const StyledLink = styled(Link)
`color: white;
 margin: 1rem;
 text-decoration: none;
 position: relative;
 &:hover {
    color: yellow;
}`

function MyHeader() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'primary.dark' }} component="nav">
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
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About Us</StyledLink>
                <StyledLink to="/contact">Contacts</StyledLink>
                <StyledLink to="/examples">Examples</StyledLink>
                <StyledLink to="/products">Products</StyledLink>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default MyHeader;
