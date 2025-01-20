import React, { useState, useEffect } from 'react';
import API from '../../api';
import Sidebar from '../../components/Sidebar/Sidebar';
import ArticleForm from '../../components/ArticleForm/ArticleForm';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
    const [articles, setArticles] = useState([]);
    const [editingArticle, setEditingArticle] = useState(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await API.get('/articles');
            setArticles(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteArticle = async (id) => {
        try {
            await API.delete(`/articles/${id}`);
            fetchArticles();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="admin-page">
            <Sidebar />
            <div className="admin-content">
                <h1>Admin Dashboard</h1>
                <div className="form-container">
                    <ArticleForm
                        article={editingArticle}
                        onSuccess={() => {
                            setEditingArticle(null);
                            fetchArticles();
                        }}
                    />
                </div>
                <h2>Articles</h2>
                <ul className="articles-list">
                    {articles.map((article) => (
                        <li key={article.id} className="article-item">
                            <h3 className="article-title">{article.title}</h3>
                            <p className="article-excerpt">{article.content.substring(0, 100)}...</p>
                            <div className="actions">
                                <button
                                    className="edit-button"
                                    onClick={() => setEditingArticle(article)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteArticle(article.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
