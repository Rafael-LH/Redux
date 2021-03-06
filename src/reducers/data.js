import schema from '../schemas/index'
// nos permite cambiar cual quier cosa de JS a immutable
import { fromJS } from 'immutable'

// immutable es para que no puedan cambiar el valor de estos datos, esto funciona mucho para trabajar en equipo
   const initialState = fromJS({ 
            //no le pongo data porque en mi index de mis reducers a la hora de combinarlos ahi es donde le doy el hey
            entities: schema.entities,   
            categories: schema.result.categories,
            search: []
    })

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_VIDEO':

            let newList = []
            
            //SOLUCION 1
            // if(action.payload.query){
            // state.data.categories.map(items => {
            //      items.playlist.filter(item => {
            //             return item.author.includes(action.payload.query) && newList.push(item)
            //         })
            // })
            //}

            //SOLUCION 2
            if(action.payload.query){
                
                state.schema.categories.map(items => {
                    newList = items.playlist.filter(item => {
                        return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
                        })
                })
            }

            return {
                ...state,
                search: newList
            }
            break;
    
        default:
              return state  
            break;
    }

}

export default data