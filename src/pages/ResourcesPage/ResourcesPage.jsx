import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import Article1 from "../../assets/images/Article1.png";
import Article2 from "../../assets/images/Article2.png";
import Article3 from "../../assets/images/Article3.png";
import Article4 from "../../assets/images/Article4.png";
import Article5 from "../../assets/images/Article5.png";
import Article6 from "../../assets/images/Article6.png";
import "./ResourcesPage.css";


const ResourcesPage = () => {
  const articles = [
    { title: "Early Childhood", image: Article1 },
    { title: "Phycology", image: Article2 },
    { title: "Communication", image: Article3 },
    { title: "Ways of Learning", image: Article4 },
    { title: "Raise a Reader", image: Article5 },
    { title: "Importance of Crafting", image: Article6},
  ];

  return (
    <div className="resources-page">
      <Sidebar />
      <main className="main-content">
        <h1>Explore and Grow: Articles to Boost Your Child's Skills</h1>
        
        <section className="articles-section">
          <h2>Articles</h2>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <div className="article-card" key={index}>
                <img src={article.image} alt={article.title} />
                <p>{article.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResourcesPage;
