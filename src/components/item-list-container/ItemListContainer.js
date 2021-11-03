
import { collection, getDocs, query, where } from '@firebase/firestore';
import { Container, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import ItemList from '../item-list/ItemList';

const ItemListContainer = ({ match }) => {

    const categoryId = match.params.id
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true);
        setItems([]);

        const requestData = async () => {

            const queryConstraints = [];
            if (categoryId !== undefined) {
                queryConstraints.push(where('categoryId', '==', categoryId));
            }

            const q = query(collection(db, 'items'), ...queryConstraints);
            const itemsSnapshot = await getDocs(q);
            const itemsList = itemsSnapshot.docs
                .map((document) => ({ ...document.data(), id: document.id }));

            setItems(itemsList);
            setIsLoading(false);
        }
        requestData();

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