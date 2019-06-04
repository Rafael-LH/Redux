   const initialState = {
            //no le pongo data porque en mi index de mis reducers a la hora de combinarlos ahi es donde le doy el hey
            visibility: false,
            mediaId: null,
    }

// Gracias a ecma6 podemos ponerle aqui mismo un estado inicial a mi reducer por ejemplo
// const Modal = (state = {visibility: false, mediaId: null}, action) => {
    const Modal = (state = initialState, action) => {
        switch (action) {
            case 'OPEN_MODAL':
                return state
                break;
            case 'CLOSE_MODAL':
                 return state
                break;    
            default:
                break;
        }
    }

 export default Modal   