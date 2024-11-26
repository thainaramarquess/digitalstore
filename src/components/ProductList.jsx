// src/components/ProductList.jsx
import React from 'react';


const products = [
  { id: 1, name: 'K-Swiss V8 - Masculino', price: 100, discountPrice: 80, image: '/produc-image-1.jpeg' },
  { id: 2, name: 'K-Swiss V8 - Masculino', price: 150, discountPrice: 120, image: '/produc-image-2.jpeg' },
  { id: 3, name: 'K-Swiss V8 - Masculino', price: 200, discountPrice: 180, image: '/produc-image-3.jpeg' },
  { id: 4, name: 'K-Swiss V8 - Masculino', price: 250, discountPrice: 220, image: '/produc-image-4.jpeg' },
  { id: 5, name: 'K-Swiss V8 - Masculino', price: 300, discountPrice: 270, image: '/produc-image-5.jpeg' },
  { id: 6, name: 'K-Swiss V8 - Masculino', price: 350, discountPrice: 300, image: '/product-thumb-1.jpeg' },
  { id: 7, name: 'K-Swiss V8 - Masculino', price: 400, discountPrice: 350, image: '/product-thumb-3.jpeg' },
  { id: 8, name: 'K-Swiss V8 - Masculino', price: 450, discountPrice: 400, image: '/product-thumb-4.jpeg' },
];


const ProductCard = ({ product }) => (
  <a href='/product/:id' className="flex flex-col items-center">
    {/* Card apenas com a imagem */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-60 mb-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
    </div>

    {/* Informações fora do card */}
    <div className="text-center">
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-500 line-through">R$ {product.price.toFixed(2)}</p>
      <p className="text-black-600 font-bold">R$ {product.discountPrice.toFixed(2)}</p>
    </div>
  </a>
);

const ProductList = () => (
<div className="p-6 flex flex-col items-center justify-center bg-light-gray-3">
    {/* Título acima dos cards */}
    <h2 className="text-2xl font-bold text-dark-gray mb-6 text-left ">Produtos em alta</h2>
    {/* Grid de produtos */}
    <div className="grid grid-cols-4 gap-2 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;