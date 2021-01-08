import { createActions, createReducer } from 'reduxsauce'

import Immutable from 'seamless-immutable'
import strings from 'localization'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    changeLanguage: ['language'],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    language: 'en',
})

/* ------------- Reducers ------------- */

// request the data from an api
export const changeLanguage = (state, action) => {
    const {language} = action;
    console.log('language', language)
    strings.setLanguage(language);
    return state.merge({
        check: true,
        language: language
    })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CHANGE_LANGUAGE]: changeLanguage,
})
