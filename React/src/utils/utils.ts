import React from 'react'
import { IPost } from '../models/post'

export const deleteIndex = (arr : Array<IPost> | undefined,index : number) : Array<IPost> | undefined =>{
    if (arr) {
        arr.splice(index,1);
        return arr;
    }
}