import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [snackbar, setSnackbar] = useState({
        text: '',
        severity: 'success',
        open: false
    });
    const [items, setItems] = useState([]);

    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {

            setSnackbar({
                text: 'El producto ya existe en el carrito',
                severity: 'warning',
                open: true
            });
            return;
        }

        setSnackbar({
            text: `Se agregaron ${cantidad} productos al carrito`,
            severity: 'success',
            open: true
        });

        setItems([...items, { cantidad: cantidad, ...item }]);
    }

    const removeItem = (itemId) => {

        setItems(items.filter(item => item.id !== itemId));

        setSnackbar({
            text: `Se elimino el producto del carrito`,
            severity: 'success',
            open: true
        });
    }

    const clear = () => {

        setItems([]);

        setSnackbar({
            text: `Se limpio el carrito`,
            severity: 'success',
            open: true
        });
    }

    const isInCart = (itemId) => {
        return !!items.find(item => item.id === itemId);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({
            text: '',
            severity: 'success',
            open: false
        });
    };

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, items }}>
            {children}

            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.text}
                </Alert>
            </Snackbar>
        </CartContext.Provider>
    );
};
