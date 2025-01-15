import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./ResourcesPage.css";

const articles = [
    { title: "Early Childhood", image: "path_to_image/Article1.png" },
    { title: "Psychology", image: "path_to_image/Article2.png" },
    { title: "Communication", image: "path_to_image/Article3.png" },
];

const ResourcesPage = () => {
    return (
        <div className={styles.resourcesPage}>
            <Sidebar />
            <main className={styles.mainContent}>
                <h1>Explore and Grow</h1>
                <section className={styles.articlesSection}>
                    <h2>Articles</h2>
                    <div className={styles.articlesGrid}>
                        {articles.map((article, index) => (
                            <div className={styles.articleCard} key={index}>
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
