import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';
// console.log('Hola mundo!' )
import {createStore} from 'redux';

   const initialState = {
            data:{
                // spread operator
                ...data //nos estamos trallendo nuestra data de la API
            }
    }

const store = createStore(
          state => state,
          initialState,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState() ); //obtenemos los datos de nuestro store

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
hydrate( <Home data={data} />, homeContainer);

