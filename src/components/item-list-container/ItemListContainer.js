
import { Container, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemList from '../item-list/ItemList';
import itemsMock from './items.mock';


const ItemListContainer = ({ match }) => {

    const categoryId = match.params.id
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true);
        setItems([]);
        
        itemsMock(categoryId)
            .then((items) => {
                setItems(items);
                setIsLoading(false);
            });
    }, [categoryId])

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