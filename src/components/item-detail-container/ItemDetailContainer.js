import { Container, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemDetail from '../item-detail/ItemDetail';
import itemMock from './item.mock';

const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        itemMock
            .then(item => {
                setItem(item);
                setIsLoading(false);
            });
    })

    return (
        <>
            {isLoading
                ? <LinearProgress />
                : 
                <Container sx={{ marginTop: 2 }}>
                    <ItemDetail item={item} />
                </Container>
            }
        </>
    );
}

export default ItemDetailContainer;