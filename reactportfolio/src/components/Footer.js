import React from 'react';
import logoGitHub from '../assets/GitHubLogo.png';
import logoLinkedIn from '../assets/LinkedInLogo.png';

const styles = {
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padingTop: "40px",
    },
    icons: {
        padingLeft: "15px",
    },
};

export default function Footer() {
    return (
        <div styles={styles.footer}>
            <div>
                <a href="https://github.com/ArturoSer" target="_blank" rel="noreferrer" style={styles.icons}>
                    <img src={logoGitHub} alt="GitHub" height="50px"/>
                </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/arturo-serrato-3b8aa0166/" target="_blank" rel="noreferrer" style={styles.icons}>
                    <img src={logoLinkedIn} alt="LinkedIn" height="50px"/>
                </a>
            </div>
        </div>
    );
}