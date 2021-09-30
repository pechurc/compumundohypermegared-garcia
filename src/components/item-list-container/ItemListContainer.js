
import { Container } from '@mui/material';
import React from 'react';
import ItemCount from '../item-count/ItemCount';

const ItemListContainer = () => {

    const onAddToCart = (cantidad) => {
        console.log("Item agregado, cantidad:" + cantidad);
    } 

    return (
        <Container maxWidth="sm" sx={{p: 2}}>
            <ItemCount stock={10} initial={0} onAdd={onAddToCart}></ItemCount>
        </Container>

    );
}

export default ItemListContainer;