import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

	const location = useLocation();

	return (
		<div className="flex gap-2 ml-12 my-2">
			<Link to="/" className={`text-dark-gray-2 bg-transparent font-medium text-sm px-5 py-1.5 ${location.pathname === '/' ? 'border-b-4 text-primary border-primary' : ''}`}>
				Home
			</Link>
			<Link to="/products" className={`text-dark-gray-2 bg-transparent font-medium text-sm px-5 py-1.5 ${location.pathname === '/products' ? 'border-b-4 text-primary border-primary' : ''}`}>
				Produtos
			</Link>
			<Link to="/categories" className={`text-dark-gray-2 bg-transparent font-medium text-sm px-5 py-1.5 ${location.pathname === '/categories' ? 'border-b-4 text-primary border-primary' : ''}`}>
				Categorias
			</Link>
			<Link to="/orders" className={`text-dark-gray-2 bg-transparent font-medium text-sm px-5 py-1.5 ${location.pathname === '/orders' ? 'border-b-4 text-primary border-primary' : ''}`}>
				Meus pedidos
			</Link>
		</div>
	);
};

export default Navbar;