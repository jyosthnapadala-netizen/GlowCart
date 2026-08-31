import { useState } from "react";
import { WishlistContext } from "./WishlistContext";

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const alreadyExists = prevWishlist.some(
                (item) => String(item.id) === String(product.id)
            );


            if (alreadyExists) {
                return prevWishlist;
            }

            return [...prevWishlist, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) =>
            prevWishlist.filter(
                (item) => String(item.id) !== String(productId)
            )
        );
    };

    const isInWishlist = (productId) => {
        return wishlist.some(
            (item) => String(item.id) === String(productId)
        );
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
