import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionGallery from '../components/SectionGalery';
import Collection from '../components/Collection';
import ProductList from '../components/ProductList';
import OfferSection from '../components/OfferSection';

const HomePage = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
                <Header />
            </div>
            <main className="pt-16">
                <SectionGallery />
                <Collection />
                <ProductList />
                <OfferSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
