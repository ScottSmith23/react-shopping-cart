import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductProvider} from "./contexts/ProductContext";
import {CartProvider} from './contexts/CartContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, {
			id: Date.now(),
			title: item.title,
			price: item.price,
			image: item.image
	}])
	};

    const removeItem = item => {
		setCart([...cart.filter(cartItem => (
			cartItem.id !== item.id
		))])
	};

	return (
		<div className="App">
			<CartProvider value={{cart}}>
			<Navigation  />
             </CartProvider>
			{/* Routes */}
			<Route exact path="/">
			<ProductProvider value={{ products, addItem }}>
				<Products />
				</ProductProvider>
			</Route>

			<Route path="/cart">
				<CartProvider value={{cart, removeItem}}>
				<ShoppingCart />
				</CartProvider>
			</Route>
			
		</div>
	);
}

export default App;
