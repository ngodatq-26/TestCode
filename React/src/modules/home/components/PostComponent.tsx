import { Button, Card } from 'antd'
import React from 'react'
import { IPost } from '../../../models/post'
import '../styles/style.css'
import {DeleteOutlined} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from '../../../redux/reducer'
import { Action } from 'redux'
import { deletePost } from '../redux/homeReducer'

interface Props {
    post : IPost,
    index : number
}

const PostComponent = (props : Props) => {

  const dispatch = useDispatch<ThunkDispatch<AppState,null,Action<String>>>();
  const {post,index} = props;

  const deleteElement = () =>{
    dispatch(deletePost(index))
  }

  return (
    <div className="site-card-border-less-wrapper">
      <Button style={{color : 'red'}} onClick={deleteElement}><DeleteOutlined /></Button>
      <Card title={post.title} bordered={false} style={{ width: 300 }}>
        <p>Id : {post.id}</p>
        <p>User_id : {post.userId}</p>
        <p>main : {post.body} </p>
      </Card>
    </div>
  )
}

export default React.memo(PostComponent)