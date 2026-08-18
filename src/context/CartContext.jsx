import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("glowcart");

        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
        localStorage.setItem(
            "glowcart",
            JSON.stringify(cart)
        );
    }, [cart]);

    const addToCart = (product) => {
        setCart((previousCart) => {

            const existingProduct = previousCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return previousCart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: (item.quantity || 0) + 1
                        }
                        : item
                );
            }

            return [
                ...previousCart,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };

    const increaseQuantity = (productId) => {
        setCart((previousCart) =>
            previousCart.map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((previousCart) =>
            previousCart
                .map((item) =>
                    item.id === productId
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCart((previousCart) =>
            previousCart.filter(
                (item) => item.id !== productId
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export default CartProvider;