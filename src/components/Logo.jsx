// src/components/Logo.jsx
import React from 'react';
import logo from '/src/assets/logo-header.svg'; // Atualize o caminho para o SVG

const Logo = () => (
  <img src={logo} alt="Logo da Aplicação" className='w-42 ml-12' />
);

export default Logo;
