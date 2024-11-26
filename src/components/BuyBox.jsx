import React, { useState } from "react";
import starIcon from "../assets/star-icon.svg";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  options,
  optionsShape = "square",
  optionsRadius = "4px",
  optionsType = "text",
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="buy-box p-6  rounded-lg bg-light-gray-3 ">
      {/* Nome do Produto */}
      <h1 className="text-[32px] text-dark-gray font-bold">{name}</h1>

      {/* Código de Referência */}
      <p className="text-[12px] text-dark-gray-3 mt-1">Ref: {reference}</p>

      {/* Avaliações */}
      <div className="flex items-center mt-2">
        <div className="flex items-center bg-warning text-white text-[14px] rounded px-2 py-1 mr-2">
          {stars}
          <img src={starIcon} alt="Star Icon" className="w-4 h-4 ml-1" />
        </div>
        <p className="text-[14px] text-light-gray">{rating} avaliações</p>
      </div>

      {/* Preços */}
      <div className="mt-4">
        {priceDiscount ? (
          <div className="flex items-center">
            <p className="text-[16px] text-light-gray-2 line-through mr-2">
              {price}
            </p>
            <p className="text-[32px] text-dark-gray-2 font-bold">
              {priceDiscount}
            </p>
          </div>
        ) : (
          <p className="text-[32px] text-dark-gray-2 font-bold">{price}</p>
        )}
      </div>

      {/* Descrição */}
      <h3 className="text-lg font-bold text-dark-gray mb-2">Descrição</h3>
      <p className="text-[14px] text-dark-gray-2 mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>


      {/* Opções de Tamanho */}
      <div>
        <h3 className="text-lg font-bold text-dark-gray mb-2">Tamanho</h3>
        <div className="flex gap-2">
          {options.map((option, index) => (
            <button
              key={index}
              className={`flex items-center justify-center ${
                optionsShape === 'circle' ? 'w-8 h-8 rounded-full' : 'w-12 h-12 rounded-md'
              } ${
                selectedOption === option
                  ? 'bg-primary  border border-gray-300 text-white'
                  : 'bg-white border border-gray-300 text-dark-gray-2'
              }`}
              style={{
                borderRadius: optionsShape === 'square' ? optionsRadius : '50%',
              }}
              onClick={() => setSelectedOption(option)}
            >
              {optionsType === 'text' ? option : null}
            </button>
          ))}
        </div>
      </div>

      {/* Botão Comprar */}
      <button className="mt-6 w-full bg-warning font-bold text-white text-[16px] py-3 rounded">
        Comprar
      </button>
    </div>
  );
};

export default BuyBox;
