import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const Item = ({ item }) => {

    const { title, description, pictureUrl } = item;

    return (
        <Card>
            <CardMedia
                component="img"
                image={pictureUrl}
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
                <Button size="small" sx={{marginLeft: 'auto'}}>Ver detalle</Button>
            </CardActions>
        </Card>
    );
}

export default Item;