import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
    heading: {
        background: "#A6DABE",
        minHeight: 50,
        lineHeight: 2.4,
        fontSize: "1.2rem",
        padding: "0 20px",
    },
    headingText: {
        color: "white",
    },
};

function Header({ currentPage, handlePageChange }) {
    return (
        <Navbar expand="sm" style={styles.heading}>
            <Navbar.Brand>Arturo Serrato</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                        ABOUT ME
                    </Nav.Link>
                    <Nav.Link href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                        PORTFOLIO
                    </Nav.Link>
                    <Nav.Link href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                        CONTACT
                    </Nav.Link>
                    <Nav.Link href="#resumet" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                        RESUME
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;