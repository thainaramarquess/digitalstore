import React from 'react';
import Header from '../components/Header'; // Caminho para Header
import Footer from '../components/Footer'; // Caminho para Footer
import GalleryView from '../components/GalleryView';
import BuyBox from '../components/BuyBox'; // Caminho para BuyBox
import ProductList from '../components/ProductList';

const ProductViewPage = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-8 bg-light-gray-3">
                {/* Galeria de Imagens e Informações do Produto */}
                <div className="flex flex-wrap lg:flex-nowrap gap-8">
                      <GalleryView showThumbs />

                    {/* Informações do Produto */}
                    <div className="w-full lg:w-1/3">
                        <BuyBox
                            name="Tênis Nike Revolution 6 Next Nature Masculino"
                            reference="12345"
                            stars={4.5}
                            rating={125}
                            price="R$ 299,99"
                            priceDiscount="R$ 249,99"
                            options={["39", "40", "41", "42"]}
                            optionsShape="square"
                            optionsRadius="4px"
                            optionsType="text"
                        />
                    </div>
                </div>
                <ProductList/>
            </main>
            <Footer />
        </div>
    );
};

export default ProductViewPage;
