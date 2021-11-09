import { Alert, AlertTitle, Button, Container, Divider, Grid, List, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../cart-item/CartItem";
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from "@mui/system";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/firebase";

const Cart = () => {

    const [orderId, setOrderId] = useState();
    const { items, removeItem, clear } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        let nuevoTotal = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        setTotal(nuevoTotal);
    }, [items])

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormValue({
            ...formValue,
            [name]: value
        });
        console.log(`${name}: ${value}`);
    }

    const onFinalizarCompra = async () => {

        const cartItems = items.map((item) => ({ id: item.id, title: item.title, price: item.price, cantidad: item.cantidad }));

        const docSnap = await addDoc(collection(db, "compras"), {
            buyer: formValue,
            items: cartItems,
            total: total,
            date: new Date(Date.now())
        });

        setOrderId(docSnap.id);
    }

    return (
        <Container maxWidth="md" sx={{ marginTop: 2 }}>
            {
                orderId ?
                    <Alert severity="success">
                        <AlertTitle>Exito!</AlertTitle>
                        Se genero correctamente la orden con Id: <strong>{orderId}</strong>
                    </Alert>
                    :
                    <>
                        {
                            !items.length ?
                                <>
                                    <Typography variant="h4">No hay items en el carrito</Typography>
                                    <Button variant="outlined" component={Link} to="/">Busca algunos productos!</Button>
                                </>
                                :
                                <>

                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography variant="h4">Carrito</Typography>
                                        <Button onClick={clear} variant="contained" startIcon={<ClearIcon />}>Vaciar carrito</Button>
                                    </Grid>

                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {items?.map(item => <CartItem item={item} onDelete={removeItem} key={item.id}></CartItem>)}
                                    </List>
                                    <Divider />
                                    <Grid container alignItems="center">
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Total
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography gutterBottom variant="h6" component="div">
                                                ${total}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Typography variant="h4" sx={{ mt: 2 }}>Datos del cliente</Typography>
                                    <Box
                                        component="form"
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            fullWidth
                                            sx={{ m: 1 }}
                                            label="Nombre"
                                            name="name"
                                            variant="standard"
                                            onChange={handleInputChange}
                                        />

                                        <TextField
                                            fullWidth
                                            sx={{ m: 1 }}
                                            label="Telefono"
                                            name="phone"
                                            variant="standard"
                                            onChange={handleInputChange}
                                        />

                                        <TextField
                                            fullWidth
                                            sx={{ m: 1 }}
                                            label="Email"
                                            name="email"
                                            variant="standard"
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                    <Button variant="contained" onClick={onFinalizarCompra}>Finalizar compra</Button>
                                </>
                        }
                    </>
            }
        </Container >
    );
}

export default Cart;