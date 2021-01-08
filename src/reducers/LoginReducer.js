import { createActions, createReducer } from 'reduxsauce'

import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    testRequest: ['username', 'password'],
    testSuccess: ['status'],
    testError: ['user'],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    check: false,
    error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const testRequest = (state) => {
    return state.merge({
        check: true,
    })
}





// successful api lookup for single entity
export const testSuccess = (state, action) => {
    return state.merge({
        check: false,
    })
}

// Something went wrong fetching a single entity.
export const testError = (state, error) => {
    return state.merge({
        check: false,
        error: error
    })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.TEST_REQUEST]: testRequest,
    [Types.TEST_SUCCESS]: testSuccess,
    [Types.TEST_ERROR]: testError,
})
