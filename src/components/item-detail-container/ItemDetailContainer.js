import { doc, getDoc } from '@firebase/firestore';
import { Container, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import ItemDetail from '../item-detail/ItemDetail';

const ItemDetailContainer = ({ match }) => {

    const itemId = match.params.id;
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const requestData = async () => {
            const docRef = doc(db, 'items', itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const item = docSnap.data();
                const id = docSnap.id;

                setItem({...item, id});
                setIsLoading(false);
            }
        } 
        requestData();

    }, [itemId])

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