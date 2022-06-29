import { Card, Skeleton } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { IPost } from '../../../models/post'
import { AppState } from '../../../redux/reducer'
import '../styles/style.css'
import PostComponent from './PostComponent'

interface Props {
    loading : boolean
}

const HomeComponent = (props : Props) => {

 const {loading} = props;

 const dispatch = useDispatch<ThunkDispatch<AppState,null,Action<String>>>();
 const stateData = useSelector((state : any) => state)
 const page = useSelector((state : any) => state.post.page)
 const pageSize = useSelector((state : any) => state.post.pageSize)

 const start = React.useMemo(() => (page-1)*pageSize,[page,pageSize]);
 const end = React.useMemo(() => (page)*pageSize,[page,pageSize]);

  return (
    <>
    <div className='post-main'>
          {
            stateData.post.post ? stateData.post.post.slice(start,end).map((e : any,index : number) => {
              return (
                <div key={index}>
                  <PostComponent post={e} index={index} />
                </div>
              )
            }) : null
          }
    </div>
    </>
  )
}

export default React.memo(HomeComponent)