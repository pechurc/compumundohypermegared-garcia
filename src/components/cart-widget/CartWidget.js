import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React from 'react';

const CartWidget = () => {

    return (
        <IconButton color="inherit">
            <ShoppingCartIcon />
        </IconButton>
    );
}

export default CartWidget;