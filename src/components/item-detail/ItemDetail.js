import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ItemCount from "../item-count/ItemCount";

const ItemDetail = ({ item }) => {

  const { pictureUrl, price, title, description, stock } = item;

  const onAddToCart = (cantidad) => {
    console.log(`se agregaron ${cantidad} al carrito`);
  }

  return (
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
          <ItemCount initial={0} stock={stock} onAdd={onAddToCart}></ItemCount>
          <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 1 }}>
            ({stock} disponibles)
          </Typography>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, margin: 'auto' }}
        image={pictureUrl}
        alt="green iguana"
      />
    </Card>
  );
}

export default ItemDetail;