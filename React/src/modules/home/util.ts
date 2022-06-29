import React from 'react'
import { IPost, IPostValidate } from '../../models/post'

const validateId = (id : number|string) =>{
    if(!id) {
        return 'Id is required!'
    } 
    if(typeof(id) != 'number') {
            return 'UserId is number!'
    }
    return ''
}

const validateUserId = (UserId : number|string) =>{
    if(!UserId) {
        return 'UserId is required!'
    } 
    if(typeof(UserId) != 'number') {
            return 'UserId is number!'
    }
    return ''
}

const validateTitle = (title : string) =>{
    if(!title) {
        return 'Title is required!'
    } 
    return ''
}

const validateBody = (body : string) =>{
    if(!body) {
        return 'Body is required!'
    } 
    return ''
}

export const validatePost = (post : IPost) : IPostValidate => {
    return {
        id : validateId(post.id),
        userId : validateUserId(post.userId),
        title : validateTitle(post.title),
        body : validateBody(post.body)
    }
}

export const validPost = (valid : IPostValidate) : boolean=> {
    return !valid.id && !valid.userId && !valid.body && !valid.title
}

