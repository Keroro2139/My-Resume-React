import { CHANGE_THEME, CHANGE_LANGUAGE } from '../actions'

var date = new Date()
var Hours = date.getHours()
var Minutes = date.getMinutes()

if (Hours >= 0 && Hours < 10) {
    Hours = '0' + Hours
}
if (Minutes >= 0 && Minutes < 10) {
    Minutes = '0' + Minutes
}

var now = Hours.toString() + '.' + Minutes.toString()
var changed

if (now >= '6.00' && now <= '17.59') {
    changed = 'lightTheme'
}
else if ((now >= '18.00' && now <= 23.59) || (now >= '00.00' && now <= '5.59')) {
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