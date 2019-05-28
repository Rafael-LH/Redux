

const data = (state, action) => {
    switch (action.type) {
        case 'SEARCH_VIDEO':

            let newList = []
            
            //SOLUCION 1
            // state.data.categories.map(items => {
            //      items.playlist.filter(item => {
            //             return item.author.includes(action.payload.query) && newList.push(item)
            //         })
            // })

            //SOLUCION 2
                state.data.categories.map(items => {
                    newList = items.playlist.filter(item => {
                        return item.author.includes(action.payload.query)
                        })
                })


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