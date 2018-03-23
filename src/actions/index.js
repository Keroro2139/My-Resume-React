export const CHANGE_THEME = 'CHANGE_THEME'
export const GET_CURRENT_TIME = 'GET_CURRENT_TIME'
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

export function switchTheme(changed) {
    return {
        type: CHANGE_THEME,
        payload: changed
    }
}

export function getCurrentTime(now) {
    return {
        type: GET_CURRENT_TIME,
        payload: now
    }
}

export function changeLanguage(language) {
    return {
        type: CHANGE_LANGUAGE,
        payload: language
    }
}