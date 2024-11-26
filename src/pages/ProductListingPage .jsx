import React from 'react';
import Header from '../components/Header'; // Caminho para Header
import Footer from '../components/Footer'; // Caminho para Footer
import FilteredProductList from '../components/FilteredProductList';

const ProductListingPage = () => {
    return (
        <div>
            <Header />
            <main>
                {/* Conteúdo da página */}
                <FilteredProductList/>
            </main>
        <Footer />
        </div>
    );
};

export default ProductListingPage;