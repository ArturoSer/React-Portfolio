import React from 'react';
import Avatar from '../../assets/Avatar.JPG';

export default function About() {
    return (
        <div className="content">
            <h2>ABOUT ME</h2>
            <div>
                <img src={Avatar} alt="" height="150px" />
            </div>
            <p>
                <br />
                Hello Everyone! My name is Arturo Serrato and I am currently a Full stack web developer from UW.
                My hobbies are playing Valorant competitively and also reading manga and watching anime! 🚀


                <br />
                <br />
            </p>
        </div>
    );
}