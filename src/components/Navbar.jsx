import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation(); // Obtém o caminho atual da URL
  
    return (
      <div className="flex gap-2 ml-12 mt-6">
        <Link
          to="/"
          className={`text-primary bg-transparent font-medium text-sm px-5 py-1.5 ${
            location.pathname === '/' ? 'border-b-4 border-primary' : ''
          }`}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`text-primary bg-transparent font-medium text-sm px-5 py-1.5 ${
            location.pathname === '/products' ? 'border-b-4 border-primary' : ''
          }`}
        >
          Produtos
        </Link>
        <Link
          to="/categories"
          className={`text-primary bg-transparent font-medium text-sm px-5 py-1.5 ${
            location.pathname === '/categories' ? 'border-b-4 border-primary' : ''
          }`}
        >
          Categorias
        </Link>
        <Link
          to="/orders"
          className={`text-primary bg-transparent font-medium text-sm px-5 py-1.5 ${
            location.pathname === '/orders' ? 'border-b-4 border-primary' : ''
          }`}
        >
          Meus pedidos
        </Link>
      </div>
    );
  };
  
  export default Navbar;