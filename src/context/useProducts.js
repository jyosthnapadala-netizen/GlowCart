import { useContext } from "react";
import { ProductContext } from "./ProductContext.js";

export function useProducts() {
    return useContext(ProductContext);
}