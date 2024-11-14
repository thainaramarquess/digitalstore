import React from 'react';
import { FaTshirt, FaShoppingBag, FaHatCowboy, FaHeadphones, FaShoePrints } from 'react-icons/fa'; 
import Collection1 from "../../public/collection-1.png";
import Collection2 from "../../public/collection-2.png";
import Collection3 from "../../public/collection-3.png";

const Collection = () => {
  return (
    <section className="py-10 bg-light-gray-3">
      <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-dark-gray mb-6 text-left">
          Coleção em destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute top-2 left-2 bg-success text-dark-gray text-xs px-2 py-1 rounded-full">
              30% OFF
            </div>
            <img
              src={Collection1}
              alt="Produto 1"
              className="w-full h-56 object-cover"
            />
            <button className="absolute bottom-2 left-2 bg-light-gray-2 text-primary py-2 px-4 rounded-lg hover:bg-light-gray transition duration-200">
              Comprar
            </button>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute top-2 left-2 bg-success text-dark-gray text-xs px-2 py-1 rounded-full">
              30% OFF
            </div>
            <img
              src={Collection2}
              alt="Produto 2"
              className="w-full h-56 object-cover"
            />
            <button className="absolute bottom-2 left-2 bg-light-gray-2 text-primary py-2 px-4 rounded-lg hover:bg-light-gray transition duration-200">
              Comprar
            </button>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute top-2 left-2 bg-success text-dark-gray text-xs px-2 py-1 rounded-full">
              30% OFF
            </div>
            <img
              src={Collection3}
              alt="Produto 3"
              className="w-full h-56 object-cover"
            />
            <button className="absolute bottom-2 left-2 bg-light-gray-2 text-primary py-2 px-4 rounded-lg hover:bg-light-gray transition duration-200">
              Comprar
            </button>
          </div>
        </div>
      

    {/* Nova seção: Categorias em destaque */}
            <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
            Coleção em destaque
            </h2>
            <div className="flex justify-center space-x-6">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-2xl">
                <FaTshirt />
                </div>
                <span className="text-white mt-2">Camisetas</span>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-2xl">
                <FaShoppingBag />
                </div>
                <span className="text-white mt-2">Calças</span>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-2xl">
                <FaHatCowboy />
                </div>
                <span className="text-white mt-2">Bonês</span>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-2xl">
                <FaHeadphones />
                </div>
                <span className="text-white mt-2">Headphone</span>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-2xl">
                <FaShoePrints />
                </div>
                <span className="text-white mt-2">Tênis</span>
            </div>
            </div>
        </div>
     </div>
    </section>
  );
};

export default Collection;