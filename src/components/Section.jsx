import React from 'react';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="my-8">
      <div className={`flex ${titleAlign === 'center' ? 'justify-center' : 'justify-between'} items-center`}>
        {/* Título */}
        <h2 className="text-dark-gray-2 text-2xl">{title}</h2>
        
        {/* Link (se fornecido) */}
        {link && (
          <a 
            href={link.href} 
            className="text-primary text-lg hover:text-primary-dark"
          >
            {link.text}
          </a>
        )}
      </div>

      {/* Conteúdo dinâmico passado como children */}
      <div className="mt-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
