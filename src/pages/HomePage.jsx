// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header'; // Caminho para Header
import Footer from '../components/Footer'; // Caminho para Footer
import SectionGallery from '../components/SectionGalery';
import Collection from '../components/Collection';
import ProductList from '../components/ProductList';
import OfferSection from '../components/OfferSection';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                {/* Conteúdo da página */}
                <SectionGallery/>
                <Collection/>
                <ProductList/>
                <OfferSection/>
            </main>
        <Footer />
        </div>
    );
};

export default HomePage;
