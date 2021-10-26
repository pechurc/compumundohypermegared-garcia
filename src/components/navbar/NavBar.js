import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext, useEffect } from 'react';
import CartWidget from '../cart-widget/CartWidget';
import { Link } from 'react-router-dom';
import brandLogo from './brand.png';
import { CartContext } from '../../contexts/CartContext';

const useStyles = makeStyles((theme) =>
    createStyles({
        logo: {
            maxWidth: 40
        }
    })
);

const NavBar = () => {

    const classes = useStyles();
    
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
                    <Link to="/">
                        <img src={brandLogo} alt="Compumundo Hypermegared" className={classes.logo} />
                    </Link>
                    <Button component={Link} to="/category/1" color="inherit">Procesadores</Button>
                    <Button component={Link} to="/category/2" color="inherit">Gabinetes</Button>
                    <Button component={Link} to="/category/3" color="inherit">Fuentes</Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;