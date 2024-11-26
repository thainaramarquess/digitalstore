import React from 'react';
import Collection1 from "../../public/collection-1.png";
import Collection2 from "../../public/collection-2.png";
import Collection3 from "../../public/collection-3.png";
import tshirt from '../assets/tshirt.svg';
import pants from '../assets/pants.svg';
import headphones from '../assets/headphones.svg';
import tenis from '../assets/tenis.svg';

const Collection = () => {
	return (
		<section className="py-10 bg-[#F9F8FE]">
			<div className="max-w-screen-xl mx-auto px-4">
				<h2 className="text-2xl font-bold text-dark-gray mb-6 text-left">
					Coleção em destaque
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					<div className="relative bg-white rounded-lg overflow-hidden">
						<div className="absolute top-2 left-2 bg-[#E7FF86] text-dark-gray text-xs font-semibold px-3 py-1 rounded-full">
							30% OFF
						</div>
						<img src={Collection1} alt="Produto 1" className="w-full h-56 object-cover"/>
						<button className="absolute bottom-2 left-2 bg-light-gray-3 text-primary py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition duration-200">
							Comprar
						</button>
					</div>

					<div className="relative bg-white rounded-lg overflow-hidden">
						<div className="absolute top-2 left-2 bg-[#E7FF86] text-dark-gray font-semibold text-xs px-2 py-1 rounded-full">
							30% OFF
						</div>
						<img src={Collection2} alt="Produto 2" className="w-full h-56 object-cover"/>
						<button className="absolute bottom-2 left-2 bg-light-gray-3 text-primary py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition duration-200">
							Comprar
						</button>
					</div>

					<div className="relative bg-white rounded-lg overflow-hidden">
						<div className="absolute top-2 left-2 bg-[#E7FF86] text-dark-gray text-xs font-semibold px-2 py-1 rounded-full">
							30% OFF
						</div>
						<img src={Collection3} alt="Produto 3" className="w-full h-56 object-cover"/>
						<button className="absolute bottom-2 left-2 bg-light-gray-3 text-primary py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition duration-200">
							Comprar
						</button>
					</div>
				</div>

				
				<div className="text-center pt-24">
					<h2 className="text-2xl font-bold text-dark-gray mb-6">
						Coleções em destaque
					</h2>
					<div className="flex justify-center space-x-12">
						
						<div className="flex flex-col items-center">
							<div className="w-24 h-24 bg-white text-white rounded-full flex items-center justify-center text-2xl">
								<img src={tshirt} alt="" />
							</div>
							<span className="text-dark-gray-2 font-semibold mt-2">Camisetas</span>
						</div>

						
						<div className="flex flex-col items-center">
							<div className="w-24 h-24 bg-white text-white rounded-full flex items-center justify-center text-2xl">
								<img src={pants} alt="" />
							</div>
							<span className="text-dark-gray-2 font-semibold mt-2">Calças</span>
						</div>

						
						<div className="flex flex-col items-center">
							<div className="w-24 h-24 bg-white text-white rounded-full flex items-center justify-center text-2xl">
								<img src={pants} alt=""/>
							</div>
							<span className="text-dark-gray-2 font-semibold mt-2">Bonês</span>
						</div>

						
						<div className="flex flex-col items-center">
							<div className="w-24 h-24 bg-white text-white rounded-full flex items-center justify-center text-2xl">
								<img src={headphones} alt="" />
							</div>
							<span className="text-dark-gray-2 font-semibold mt-2">Headphone</span>
						</div>

						
						<div className="flex flex-col items-center">
							<div className="w-24 h-24 bg-white text-white rounded-full flex items-center justify-center text-2xl">
								<img src={tenis} alt="" />
							</div>
							<span className="text-dark-gray-2 font-semibold mt-2">Tênis</span>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
};

export default Collection;