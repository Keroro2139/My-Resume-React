import { CHANGE_THEME, CHANGE_LANGUAGE } from '../actions'

var date = new Date()
var Hours = date.getHours()
var Minutes = date.getMinutes()

var changed

if (Hours >= 6 && Hours < 18) {
    changed = 'lightTheme'
}
else if ((Hours >= 18 && Hours <= 23) || (Hours >= 0 && Hours < 6)) {
    changed = 'darkTheme'
}

let defaultState = {
    changed,
    language: 'EN'
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, changed: action.payload }
            break

        case CHANGE_LANGUAGE:
            return { ...state, language: action.payload }
            break

        default:
            break
    }
    return state
}