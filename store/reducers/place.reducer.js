import { ADD_PLACE } from '../actions/place.action'

const initialState = {
    places: []
}

const placeReducer =( state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const newPlace ={ id: Date.now(), title: action.payload.title, image: action.payload.image }
            return {
                ...state,
                places: [...state.places, newPlace]
            }
        default:
            return state
    }
}
export default placeReducer;