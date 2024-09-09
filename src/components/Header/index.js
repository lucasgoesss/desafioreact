import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>RocketMovies</h1>
            <input
                type="text"
                placeholder="Pesquisar pelo título"
                className="search-bar"
            />
            <div className="user-info">
                <span>Rodrigo Gonçalves</span>
                <button className="logout-btn">Sair</button>
            </div>
        </header>
    );
};

export default Header;
