import React from 'react';
import './Features.css';

const features = [
  {
    className: 'feature-icon-one',
    description: '"Create unique profiles for each child to personalize their learning and development experience. Easily manage and track their progress all in one place."',
    title: 'Child Profiles',
  },
  {
    className: 'feature-icon-two',
    title: 'Personalized Skill Suggestion',
    description: '"Receive tailored skill recommendations based on your child’s needs and your preferences. From creativity to problem-solving, we’ve got it covered."',
  },
  {
    className: 'feature-icon-three',
    title: 'Progress Tracking',
    description: '"Keep an eye on milestones and achievements with our progress tracker. Celebrate your child’s growth and unlock new goals together."',
  },
  {
    className: 'feature-icon-four',
    title: 'Track Skill Development',
    description: '"Monitor your child’s progress with detailed reports and visual growth charts. Stay on top of their learning journey every step of the way."',
  },
  {
    className: 'feature-icon-five',
    title: 'Explore   Resources',
    description: '"Discover articles, games, and stories designed to enhance your child’s skills. Filter by age, interests, and learning objectives to find the perfect activity."',
  },
  {
    className: 'feature-icon-six',
    title: 'AI Story Visualization',
    description: '"Transform your child’s favorite stories into magical visuals with our AI-powered tool. Let their imagination come alive!"',
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className={`feature-icon ${feature.className}`}></div>
            <p className="feature-description">{feature.description}</p>
            <h3 className="feature-title">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;


