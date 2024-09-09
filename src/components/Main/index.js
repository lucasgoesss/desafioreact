import React from 'react';
import './main-content.css';
import MovieItem from '../MovieItem';

const Main = () => {
    return (
        <div class="main-content">
            <button class="add-movie-btn">+ Adicionar filme</button>
            <div class="movie-list">
                <MovieItem
                    nome="Jogos Mortais"
                    descricao="Jigsaw é um assassino que possui uma marca registrada: 
                    ele deixa em suas vítimas uma cicatriz em forma de quebra-cabeças, que faz com que elas cometam atos igonizantes para se salvar.
                    O detetive David Tapp (Danny Glover) é designado para investigar os assassinatos, bem como a capturar seu autor."
                />
            </div>
        </div>
    );
};

export default Main;
