import './redux.css'
import {createStore} from 'redux'


document.getElementById('form').addEventListener('submit', handleSubmit)
   
function handleSubmit(e){
      
        e.preventDefault()

        let data = new FormData(document.getElementById('form') )
        let title = data.get('title')

        /* console.log(title) */
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

   let store = createStore(
        state => state,
        initialState,
        // extension para window redux (solo poner en el desarrollo)
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