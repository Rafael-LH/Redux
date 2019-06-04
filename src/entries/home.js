import React from 'react';
import { hydrate, render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// console.log('Hola mundo!' )
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from '../reducers/index' // aqui em estroy trallendo mis multiples reducers

// initialState de mi store
//    const initialState = { //mejor lo puse lo que necesito en cada uno de mis reducers
//             data:{
//                 entities: data.entities,   
//                 categories: data.result.categories,
//                 search: []
//             },
//             modal:{
//                 visibility: false,
//                 mediaId: null,
//             }
//     }

const store = createStore(
          reducer,
          {},
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState() ); //obtenemos los datos de nuestro store

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
   
    
render( 
        <Provider store={store}>
            <Home />
        </Provider>
    , homeContainer);

