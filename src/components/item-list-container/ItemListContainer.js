
import { Container, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemList from '../item-list/ItemList';
import itemsMock from './items.mock';


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        itemsMock
            .then((items) => {
                setItems(items);
                setIsLoading(false);
            });
    })

    return (
        <>
            {isLoading && <LinearProgress />}
            <Container>
                <ItemList items={items} />
            </Container>
        </>
    );
}

export default ItemListContainer;