import React from 'react';
import './Resources.css';

const resources = [
  {
    title: 'EDRAAK',
    link: '#', 
    imageClass: 'resource-image-one', 
  },
  {
    title: 'Zero to Three',
    link: '#',
    imageClass: 'resource-image-two',
  },
  {
    title: 'Urjouha',
    link: '#',
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
              Explore
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;