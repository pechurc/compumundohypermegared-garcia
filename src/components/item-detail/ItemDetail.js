import { Alert, Button, Card, CardActions, CardContent, CardMedia, Snackbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from 'react-router-dom';
import ItemCount from "../item-count/ItemCount";

const ButtonTerminar = () => <Button component={Link} to="/cart" variant="contained" color="primary">Terminar compra</Button>;

const ItemDetail = ({ item }) => {

  const { pictureUrl, price, title, description, stock } = item;
  const [cantidad, setCantidad] = useState();
  const [open, setOpen] = useState(false);

  const onAddToCart = (cantidad) => {
    setCantidad(cantidad);
    setOpen(true);
    console.log(`se agregaron ${cantidad} al carrito`);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', alignContent: 'space-between' }}>
            {isNaN(cantidad)
              ? <>
                <ItemCount initial={0} stock={stock} onAdd={onAddToCart}></ItemCount>
                <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 1 }}>
                  ({stock} disponibles)
                </Typography>
              </>
              : <ButtonTerminar />
            }
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, margin: 'auto' }}
          image={pictureUrl}
          alt="green iguana"
        />
      </Card>
      
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se agrego {cantidad} producto/s al carrito
        </Alert>
      </Snackbar>
    </>
  );
}

export default ItemDetail;