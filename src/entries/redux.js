import './redux.css'
import {createStore} from 'redux'


document.getElementById('form').addEventListener('submit', handleSubmit)
   
function handleSubmit(e){
      
        e.preventDefault()

        let data = new FormData(document.getElementById('form') )
        let title = data.get('title')

        // Esto es una accion y una accion es un bloque de informacion que envia datos a la aplicacion
       store.dispatch({
            // lo unico obligatorio es que el key tiene que tener el nombre de type y le tenemos que dar un valor
            // algo que sea de preferencia significativo con lo que estamos haciendo
            type: 'ADD_SONG', //como convencion se pone el valor en mayuscula y espacios con _
            playload: { //aqui va la data en este caso le puse como nombre payload pero le puedo dar el nombre que yo quiera
                title // con ecma 6 si el nombre de mi key es igual que el nombre de mi valor solo dejamos una vez no hace falta poner title:title

            }
        })

        // Las acciones se utilizan con el método dispatch()
        // Son la única fuente de información del store. Solamente de esa forma el store puede saber que los states cambian.
        // Son objetos planos

    }

    const initialState = [
        {
            "title": "Despacito"
        },
        {
            "title": "On more time"
        },
        {
            "title": "echame la culpa"
        }
    ]

    const reducer = function(state, action){
            switch (action.type) {
                case 'ADD_SONG':
                    return [
                        // spread operator
                        ...state,
                        action.playload //action.playload es un objeto que esta en el dispatch
                    ]    
                    break;
                
                default:
                    return state;
                    break;
            }
    }

//    create store recibe tres parametros
//    1- el state
//    2- state inicial
//    3- extension para el browser para hacer debug, esto ultimo solo se tiene que poner en modo de produccion  
   let store = createStore(
        reducer,
        initialState,
        // extension para window redux (solo poner en el desarrollo)
        // link para la extensio https://github.com/zalmoxisus/redux-devtools-extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    let container = document.getElementById('playlist')
    let playlist = store.getState()

    playlist.forEach(items => {
        
           let element = document.createElement('p')
           let text = document.createTextNode(items.title)

            // tambien se puede hacer de esta manera
            // element.textContent = items.title
           
           element.appendChild(text)
           container.appendChild(element)

    });

    //obtenemos los datos de mi store
    // console.log(store.getState() )


// NOTA MUY IMPORTANTE
// Reducer

// Modifican nuestro estado
// Puede haber múltiples reducers en la aplicación y un solo store.
// Devuelve el siguiente estado.
// Que no deben hacer

// Modificar los argumentos recibidos
// Llamar a APIs (u otras tareas secundarias)
// Llamar a funciones no puras como Date.now(), Math.random()
// <h1>Funciones puras</h1>
// Es un concepto de programación funcional, hace que el código sea más legible. Tienen las siguientes condiciones:
// Dados los mismos datos de entrada, deben retornar el mismo resultado sin importar el número de veces que se llame.
// No debe tener objetos secundarios.
// El reducer se iguala a una función, esta función recibe dos parámetros que son el state y la action y en la función
// se debe definir que se hace con state y action; generalmente se valida con un switch.

// ¿Qué es una función pura?

// “Dados los mismos parámetros/argumentos/entradas deben retornar el mismo resultado, sin importar el número de veces que se llame”

