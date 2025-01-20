import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import Sidebar from '../Sidebar/Sidebar';
import './ArticlesList.css'; // CSS specific to the articles list

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchArticles();
    }, [search]);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(`/articles`, { params: { query: search } });
            setArticles(response.data.data); // Assuming paginated response
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="articles-page">
            <Sidebar />
            <div className="articles-content">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <ul className="articles-list">
                    {articles.map((article) => (
                        <li key={article.id} className="article-item">
                            <h3 className="article-title">{article.title}</h3>
                            <p className="article-excerpt">{article.content.substring(0, 100)}...</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ArticlesList;
