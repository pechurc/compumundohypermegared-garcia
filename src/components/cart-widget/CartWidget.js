import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {

    const { items } = useContext(CartContext);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {

        let cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
        setItemsCount(cantidad);
    }, [items])

    return (
        <Badge badgeContent={itemsCount} color="secondary">
        <IconButton component={Link} to="/cart" color="inherit" >
            <ShoppingCartIcon />
        </IconButton>
        </Badge>
    );
}

export default CartWidget;