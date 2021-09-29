
import { Container } from '@mui/material';
import React from 'react';
import ItemCount from '../item-count/ItemCount';

const ItemListContainer = () => {

    return (
        <Container maxWidth="sm" sx={{p: 2}}>
            <ItemCount stock={10} initial={0} onAdd={() => { console.log("Item agregado") }}></ItemCount>
        </Container>

    );
}

export default ItemListContainer;