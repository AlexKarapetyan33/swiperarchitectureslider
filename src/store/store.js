


const initState = {
    products : []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'get-all' :
            return {
                ...state,
                products : action.payload
            }

        default : 
            return state
    }
}

export{initState, reducer}