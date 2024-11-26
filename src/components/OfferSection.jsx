import React from 'react';

const OfferSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Lado esquerdo: Imagem */}
        <div>
          <img
            src="../../public/produc-image-6.png"
            alt="Air Jordan"
            className="w-full h-auto  object-cover"
          />
        </div>

        {/* Lado direito: Conteúdo */}
        <div>
          <h2 className="text-lg font-bold text-primary mb-2">
            Coleção em oferta
          </h2>
          <h1 className="text-3xl font-extrabold text-black mb-4">
            Air Jordan edição de colecionador
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            elementum, lacus a facilisis hendrerit, eros lorem pretium ligula,
            non sagittis ipsum nulla at dolor.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-tertiary transition duration-200">
            Ver oferta
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
