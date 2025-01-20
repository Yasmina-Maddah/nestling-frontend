import React, { useState } from 'react';
import API from '../../api';
import './ArticleForm.css'; // CSS specific to the article form

const ArticleForm = ({ article = null, onSuccess }) => {
    const [title, setTitle] = useState(article?.title || '');
    const [content, setContent] = useState(article?.content || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (article) {
                await API.put(`/articles/${article.id}`, { title, content });
            } else {
                await API.post('/articles', { title, content });
            }
            onSuccess();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="article-form">
            <h2>{article ? 'Edit Article' : 'Create New Article'}</h2>
            <input
                type="text"
                className="form-input"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                className="form-textarea"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit" className="form-button">
                {article ? 'Update Article' : 'Create Article'}
            </button>
        </form>
    );
};

export default ArticleForm;
