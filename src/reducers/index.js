import { combineReducers } from 'redux';
import configureStore from './create-store'
import rootSaga from '../sagas'
export const reducers = combineReducers({ login: require('./LoginReducer').reducer, language: require('./LanguageReducer').reducer });

export default () => {
    let finalReducers = reducers

    let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./').reducers
            store.replaceReducer(nextRootReducer)
            const newYieldedSagas = require('../sagas').default
            sagasManager.cancel()
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas)
            })
        })
    }

    return store
}
