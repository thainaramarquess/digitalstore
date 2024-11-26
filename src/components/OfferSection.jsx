import React from 'react';
import productImageOffer from '../assets/productImageOffer.svg';

const OfferSection = () => {
	return (
		<section className="py-32 bg-white">
			<div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div>
					<img src={productImageOffer} alt="Air Jordan" className="w-full h-auto  object-cover"/>
				</div>
				<div>
					<h2 className="text-lg font-bold text-primary mb-2">
						Oferta especial
					</h2>
					<h1 className="text-3xl font-extrabold text-dark-gray-2 mb-4">
						Air Jordan edição de colecionador
					</h1>
					<p className="text-dark-gray-2 mb-6 max-w-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
						elementum, lacus a facilisis hendrerit, eros lorem pretium ligula,
						non sagittis ipsum nulla at dolor.
					</p>
					<button className="bg-primary text-white px-12 py-2 rounded-lg hover:bg-tertiary transition duration-200">
						Ver oferta
					</button>
				</div>
			</div>
		</section>
	);
};

export default OfferSection;
