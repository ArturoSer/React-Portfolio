import React from 'react';
import PortfolioCard from './PortfolioCard';
import CardGroup from 'react-bootstrap/CardGroup';


import portfolioImage1 from '../assets/image1.png';
import portfolioImage2 from '../assets/image2.png';
import portfolioImage3 from '../assets/image3.png';
import portfolioImage4 from '../assets/image4.png';
import portfolioImage5 from '../assets/project1.png';
import portfolioImage6 from '../assets/project2.png';

const portfolioContent = [
    {
        id: 1,
        title: "Project 1 (Recipe Roulette)",
        description: "A recipe to help you decide on what you want!",
        deployedUrl: "https://arturoser.github.io/Recipe-Roulette/",
        githubUrl: "https://github.com/ArturoSer/Recipe-Roulette",
        image: portfolioImage5,
    },
    {
        id: 2,
        title: "Project 2 (NewDND)",
        description: "A turnbased game that allows you to create a character and its abilites!",
        deployedUrl: "https://new-dnd7.herokuapp.com/",
        githubUrl: "https://github.com/deafboi6/newDND",
        image: portfolioImage6,
    },
    {
        id: 3,
        title: "Team Generator",
        description: "An app that allows you to keep track of your team!",
        deployedUrl: "https://arturoser.github.io/Team-Generator/",
        githubUrl: "https://github.com/ArturoSer/Team-Generator",
        image: portfolioImage1,
    },
    {
        id: 4,
        title: "Note Taker",
        description: "An app that allows you to create a note!",
        deployedUrl: "https://notetakerv23.herokuapp.com/",
        githubUrl: "https://github.com/ArturoSer/NoteTaker",
        image: portfolioImage2,
    },
    {
        id: 5,
        title: "Study Guide",
        description: "An app that allows you create a study guide for different things during the course of the bootcamp!",
        deployedUrl: "https://arturoser.github.io/prework-study-guide/",
        githubUrl: "https://github.com/ArturoSer/prework-study-guide",
        image: portfolioImage3,
    },
    {
        id: 6,
        title: "Text Editor",
        description: "An app that allows you to edit text!",
        deployedUrl: "https://texteditorv23.herokuapp.com/",
        githubUrl: "https://github.com/ArturoSer/TextEditor",
        image: portfolioImage4,
    },
];

function PortfolioComponent() {
    return (
        <CardGroup>
            <PortfolioCard portfolioContent={portfolioContent}/>
        </CardGroup>
    );
}

export default PortfolioComponent;