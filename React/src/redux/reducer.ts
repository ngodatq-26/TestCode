import React from 'react'
import { History } from 'history'
import { PostState } from '../modules/home/redux/homeReducer'
import homeReducer from '../modules/home/redux/homeReducer';
import { combineReducers } from 'redux'

export interface AppState {
    post : PostState
}

export default function createRootReducer(history : History) {
    return combineReducers({
        post : homeReducer
    })
}