import { createBrowserHistory } from 'history'
import React from 'react'
import { persistReducer,persistStore } from 'redux-persist'
import createRootReducer from './reducer'
import storage from 'redux-persist/lib/storage'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

export const history = createBrowserHistory();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  
const persistConfig = {
    key : 'root',
    storage
}

export default function configureStore(preloadedState : any) {
    const persistedReducer = persistReducer(
        persistConfig,
        createRootReducer(history)
    );

    const store = createStore(
        persistedReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                thunk,
            )
        )
    )

    const persistor = persistStore(store);

    return {store,persistor}
}