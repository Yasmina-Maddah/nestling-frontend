import React from 'react';
import './Resources.css';

const resources = [
  {
    title: 'EDRAAK',
    link: 'https://www.edraak.org/en/', 
    imageClass: 'resource-image-one', 
  },
  {
    title: 'Zero to Three',
    link: 'https://www.zerotothree.org/',
    imageClass: 'resource-image-two',
  },
  {
    title: 'Urjouha',
    link: 'https://www.urjouha.net/index-english',
    imageClass: 'resource-image-three',
  },
];

const Resources = () => {
  return (
    <section className="resources-section">
      <h2 className="resources-title">Resources</h2>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className={`resource-image ${resource.imageClass}`}></div>
            <h3 className="resource-title">{resource.title}</h3>
            <a href={resource.link} className="resource-link">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;