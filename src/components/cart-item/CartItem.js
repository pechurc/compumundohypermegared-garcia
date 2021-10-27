import { Avatar, Divider, Grid, IconButton, ListItem, ListItemAvatar, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item, onDelete }) => {

    return (
        <>
            <ListItem alignItems="flex-start"
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => onDelete(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar alt={item.title} src={item.pictureUrl} variant="square" sx={{ width: 70, height: 70 }} />
                </ListItemAvatar>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                            {item.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                            ${item.price * item.cantidad}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                            {item.cantidad} Unidad{item.cantidad > 1 && 'es'}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default CartItem;