// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
  
        {/* Logo e descrição */}
        <div className="flex flex-col space-y-4">
          {/* Componente Logo */}
          <div className="logo mb-4">
            <img src="src/assets/logo-footer.svg" alt="Logo da Digital Store" className="h-10" />
          </div>
  
          {/* Descrição da empresa */}
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          </p>
  
          {/* Ícones de redes sociais */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/facebook.svg" alt="Facebook" className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/instagram.svg" alt="Instagram" className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/twitter.svg" alt="Twitter" className="w-6 h-6 hover:text-gray-400" />
            </a>
          </div>
        </div>
  
        {/* Informações adicionais */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
  
          {/* Componente de informações: Sobre nós */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Sobre nós</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="text-sm hover:text-gray-400">Sobre Drip Store</a></li>
              <li><a href="/blog" className="text-sm hover:text-gray-400">Blog</a></li>
              <li><a href="/careers" className="text-sm hover:text-gray-400">Trabalhe Conosco</a></li>
              <li><a href="/contact" className="text-sm hover:text-gray-400">Contato</a></li>
            </ul>
          </div>
  
          {/* Componente de informações: Ajuda e Suporte */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Ajuda e Suporte</h3>
            <ul className="space-y-1">
              <li><a href="/support" className="text-sm hover:text-gray-400">Central de Atendimento</a></li>
              <li><a href="/privacy" className="text-sm hover:text-gray-400">Política de Privacidade</a></li>
              <li><a href="/terms" className="text-sm hover:text-gray-400">Termos de Serviço</a></li>
            </ul>
          </div>
  
        </div>
  
      </div>
  
      {/* Linha de separação e direitos autorais */}
      <hr className="my-4 border-gray-700" />
      <p className="text-center text-sm">© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;
