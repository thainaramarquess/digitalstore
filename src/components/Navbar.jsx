// src/components/Navigation.jsx
import React from 'react';


const Navbar = () => (
    <div class="flex gap-2 ml-12 mt-6">
        <button type="button" class="text-primary bg-transparent border-b border-b-4 border-primary  font-medium text-sm px-5 py-1.5">
            Home
        </button>
        <button type="button" class="text-primary bg-transparen font-medium text-sm px-5 py-1.5">
            Produtos
        </button>
        <button type="button" class="text-primary bg-transparent  font-medium text-sm px-5 py-1.5">
            Categorias
        </button>
        <button type="button" class="text-primary bg-transparent  font-medium text-sm px-5 py-1.5">
            Meus pedidos
        </button>
    </div>
  
);

export default Navbar;
