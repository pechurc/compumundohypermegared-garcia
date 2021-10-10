
import { Container, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemList from '../item-list/ItemList';
import itemsMock from './items.mock';


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        itemsMock
            .then((items) => {
                setItems(items);
                setLoading(false);
            });
    })

    return (
        <>
            {loading && <LinearProgress />}
            <Container>
                <ItemList items={items} />
            </Container>
        </>
    );
}

export default ItemListContainer;