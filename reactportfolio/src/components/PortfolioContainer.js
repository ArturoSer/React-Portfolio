import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const styles = {
    card: {
        margin: 15,
    },
};

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
    }
    return <Resume />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div style={styles.card}>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </div>
);
}