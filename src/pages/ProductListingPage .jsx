import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilteredProductList from '../components/FilteredProductList';

const ProductListingPage = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
                <Header />
            </div>
            <main className="pt-32">
                <FilteredProductList/>
            </main>
        <Footer />
        </div>
    );
};

export default ProductListingPage;