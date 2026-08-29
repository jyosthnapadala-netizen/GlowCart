import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const alreadyExists = prevWishlist.some(
                (item) => item.id === product.id
            );

            if (alreadyExists) {
                return prevWishlist;
            }

            return [...prevWishlist, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) =>
            prevWishlist.filter((item) => item.id !== productId)
        );
    };

    const isInWishlist = (productId) => {
        return wishlist.some((item) => item.id === productId);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}