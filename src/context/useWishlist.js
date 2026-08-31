import { useContext } from "react";
import { WishlistContext } from "./WishlistContext.js";

export function useWishlist() {
    return useContext(WishlistContext);
}