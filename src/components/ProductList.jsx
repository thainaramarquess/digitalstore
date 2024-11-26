import React from 'react';

const products = [
	{ id: 1, name: 'K-Swiss V8 - Masculino', price: 100, discountPrice: 80, image: '/produc-image-1.jpeg', promotion: true },
	{ id: 2, name: 'K-Swiss V8 - Masculino', price: 150, discountPrice: 120, image: '/produc-image-2.jpeg', promotion: true },
	{ id: 3, name: 'K-Swiss V8 - Masculino', price: 200, discountPrice: 180, image: '/produc-image-3.jpeg', promotion: false },
	{ id: 4, name: 'K-Swiss V8 - Masculino', price: 250, discountPrice: 220, image: '/produc-image-4.jpeg', promotion: false },
	{ id: 5, name: 'K-Swiss V8 - Masculino', price: 300, discountPrice: 270, image: '/produc-image-5.jpeg', promotion: false },
	{ id: 6, name: 'K-Swiss V8 - Masculino', price: 350, discountPrice: 300, image: '/product-thumb-1.jpeg', promotion: false },
	{ id: 7, name: 'K-Swiss V8 - Masculino', price: 400, discountPrice: 350, image: '/product-thumb-3.jpeg', promotion: false },
	{ id: 8, name: 'K-Swiss V8 - Masculino', price: 450, discountPrice: 400, image: '/product-thumb-4.jpeg', promotion: false },
];

const ProductCard = ({ product }) => (
	<a href='/product/:id' className="flex flex-col relative">
		{product.promotion && (
			<div className="absolute top-2 left-2 bg-[#E7FF86] text-dark-gray text-xs font-semibold px-3 py-1 rounded-full">
				30% OFF
			</div>
		)}
		<div className="bg-white rounded-lg overflow-hidden w-72 mb-6">
			<img src={product.image} alt={product.name} className="w-full h-full object-cover aspect-square" />
		</div>

		<div className="text-left">
			<p className="text-gray-400 text-xs font-bold">Tênis</p>
			<h2 className="text-lg font-medium text-dark-gray-2">{product.name}</h2>
			<div className="flex space-x-2">
				<p className="text-dark-gray-3 font-normal line-through">${product.price}</p>
				<p className="text-dark-gray font-semibold ">${product.discountPrice}</p>
			</div>
		</div>
	</a>
);

const ProductList = () => (
	<div className="p-6 bg-[#F9F8FE] py-16">
		<div className="max-w-screen-xl mx-auto px-4"> 
			<h2 className="text-2xl font-bold text-dark-gray mb-6 text-left">
				Produtos em alta
			</h2>
			<div className="grid grid-cols-4 gap-6">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	</div>
);

export default ProductList;
