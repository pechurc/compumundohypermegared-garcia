import { Button, Container, Divider, Grid, List, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../cart-item/CartItem";

const Cart = () => {

    const { items, removeItem } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let nuevoTotal = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        setTotal(nuevoTotal);
    }, [items])

    return (
        <Container maxWidth="md" sx={{ marginTop: 2 }}>
            {
                !items.length ?
                    <>
                        <Typography variant="h4">No hay items en el carrito</Typography>
                        <Button variant="contained" component={Link} to="/">Busca algunos productos!</Button>
                    </>
                    :
                    <>

                        <Typography variant="h4">Carrito</Typography>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {items?.map(item => <CartItem item={item} onDelete={removeItem}></CartItem>)}
                        </List>
                        <Divider />
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                    Total
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="h6" component="div">
                                    ${total}
                                </Typography>
                            </Grid>
                        </Grid>
                    </>
            }
        </Container >
    );
}

export default Cart;