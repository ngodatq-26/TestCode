import React from 'react'
import { ActionType,createCustomAction,getType } from 'typesafe-actions'
import { IPost } from '../../../models/post'
import { deleteIndex } from '../../../utils/utils'

export interface PostState {
    post? : Array<IPost>
    page? : number
    pageSize : number
}

export const initialState : PostState = {
    post : [],
    page : 1,
    pageSize :10
}

export const setPost = createCustomAction('post/setPost',(data : Array<IPost>) => ({
    data,
}))

export const setPage = createCustomAction('page/setPage',(data : number) => ({
    data,
}))

export const setPageSize = createCustomAction('page/setPageSize',(data : number) => ({
    data,
}))

export const addPost = createCustomAction('post/addPost',(data : IPost)=>({
    data,
}))

export const deletePost = createCustomAction('post/deletePost',(index : number)=>({
    index
}))

const actions = {setPost,setPage,setPageSize,addPost,deletePost};

type Action = ActionType<typeof actions>;

export default function reducer(state : PostState = initialState,action : Action) {
    switch(action.type) {
        case getType(setPost):
            return ({...state,post : action.data});
        case getType(setPage):
            return ({...state,page : action.data});
        case getType(setPageSize):
            return ({...state,pageSize : action.data});
        case getType(addPost):
            return ({...state,post : state.post?.concat(action.data)});
        case getType(deletePost):
            return ({...state,post : deleteIndex(state?.post,action.index)})
        default:
            return state;
    }
}

