import React from 'react';
import ResumeImg from '../../assets/resume.png';

const styles = {
    img: {
        border: "transparent",
    },
};

export default function Resume() {
    return (
        <div className="content">
            <h2>Resume</h2>
            <img style={styles.img} target="_blank" rel="noreforrer" href={ResumeImg}></img>
            <br></br>
            <br></br>

            <h3>Skills: </h3>
            <ul>
                <li>GIT</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>jQUERY</li>
                <li>MYSQL</li>
                <li>NODE.JS</li>
                <li>MONGODB</li>
                <li>REACT</li>
            </ul>
        </div>
    );
}