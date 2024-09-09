import React from 'react';
import './movie-item.css';

const MovieItem = ({ nome, descricao }) => {
    return (
        <div class="movie-item">
            <h3>{nome}</h3>
            <div class="rating">★★★★☆</div>
            <p class="description">{descricao}</p>
            <div class="tags">
                <span class="tag">Terror</span>
                <span class="tag">Ação</span>
                
            </div>
        </div>
    );
};

export default MovieItem;
