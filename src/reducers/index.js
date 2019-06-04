// reducers
import data from './data'
import modal from './modal'
// la siguiente funcion de redux nos permite combinar reducers
import { combineReducers } from 'redux'

// de esta manera estoy combinando mis reducers para importarlos en mi home entrie
 const rootReducers = combineReducers({
            data,
            // modal
 }) 

 export default rootReducers