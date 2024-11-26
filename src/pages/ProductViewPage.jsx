import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GalleryView from '../components/GalleryView';
import BuyBox from '../components/BuyBox'; 
import ProductList from '../components/ProductList';

const ProductViewPage = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
                <Header />
            </div>
            <main className="container mx-auto px-4 py-8 pt-32 bg-[#F9F8FE]">
                <div className="flex flex-wrap lg:flex-nowrap gap-8">
                      <GalleryView showThumbs />

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
