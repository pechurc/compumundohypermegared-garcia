import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useHistory } from 'react-router-dom';
import { useFirebaseImage } from '../../hooks/useFirebaseImage';

const Item = ({ item }) => {

    const history = useHistory();
    const { title, description, pictureUrl } = item;
    const picture =  useFirebaseImage(pictureUrl);

    const navigateToItem = () => {
        history.push(`/item/${item.id}`)
    }

    return (
        <Card>
            <CardMedia
                component="img"
                image={picture}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={navigateToItem} size="small" sx={{ marginLeft: 'auto' }}>Ver detalle</Button>
            </CardActions>
        </Card>
    );
}

export default Item;