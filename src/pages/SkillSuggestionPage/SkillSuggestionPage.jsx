import React from 'react';
import './SkillSuggestionPage.css';
import Sidebar from '../../components/Sidebar/Sidebar'; // Assuming Sidebar is already coded
import PuzzleIcon from '../../assets/icons/problem-solving.png'; // Replace with your actual icon path
import WonderIcon from '../../assets/icons/knowledge.png';
import CreateIcon from '../../assets/icons/creativity.png';
import ListenIcon from '../../assets/icons/communication.png';

const cards = [
    {
        id: 1,
        icon: PuzzleIcon,
        title: 'Puzzle and Solve',
        description:
            "I enjoy discovering how things work and finding solutions when something doesn’t go as planned. Whether it’s fixing a broken toy, solving a tricky puzzle, or coming up with a new way to do something, I love the challenge of thinking through problems and figuring them out.",
    },
    {
        id: 2,
        icon: WonderIcon,
        title: 'Wonder and Learn',
        description:
            "I love imagining new ideas and turning them into something real. Whether it’s drawing, building, writing stories, or making up games, I enjoy expressing myself in fun and different ways. It’s exciting to see what I can create when I let my imagination lead the way.",
    },
    {
        id: 3,
        icon: CreateIcon,
        title: 'Create and Explore',
        description:
            "I’m always curious about how things work and why they happen. I love reading, asking questions, and exploring new topics. Learning new things makes me feel excited, and I enjoy sharing what I’ve learned with others too.",
    },
    {
        id: 4,
        icon: ListenIcon,
        title: 'Listen and Express',
        description:
            "I enjoy talking to people and sharing my ideas, whether it’s telling a story, asking questions, or working with friends on a project. I like listening to others, learning from them, and finding ways to work together to make things even better.",
    },
];

const WatchMeGrowWithSidebar = () => {
    return (
        <div className="watch-me-grow-layout">
            <Sidebar />
            <div className="watch-me-grow-container">
                <h1 className="skill-section-title">Watch me grow!</h1>
                <div className="skill-cards-container">
                    {cards.map((card) => (
                        <div key={card.id} className="skill-card">
                            <div className="skill-card-header">
                                <img src={card.icon} alt={card.title} className="skill-card-icon" />
                                <h3 className="skill-card-title">{card.title}</h3>
                            </div>
                            <p className="skill-card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WatchMeGrowWithSidebar;