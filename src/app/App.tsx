import React from 'react';
import './App.module.css'; // Styles
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;
