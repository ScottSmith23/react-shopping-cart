import React from "react";

export const CartContext = React.createContext();

export const ProductProvider = CartContext.Provider;
export const ProductConsumer = CartContext.Consumer;
