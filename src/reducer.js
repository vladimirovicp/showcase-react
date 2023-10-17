

export function reducer(state, {type, payload}){

    switch (type){
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.mainId !== payload.id),
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alterName: ''
            }
        default:
            return state;
    }

    // return state;
}
