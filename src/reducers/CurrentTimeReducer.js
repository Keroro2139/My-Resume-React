import { GET_CURRENT_TIME } from '../actions'

export default function (state = '', action) {
    switch (action.type) {
        case GET_CURRENT_TIME:
            return { ...state, now: action.payload }
            break;

        default:
            break;
    }
    return state
}