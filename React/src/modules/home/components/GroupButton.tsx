import { Button, Form, Input, Modal, notification } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IPost, IPostValidate } from '../../../models/post';
import { AppState } from '../../../redux/reducer';
import { addPost, setPost } from '../redux/homeReducer';
import { validatePost, validPost } from '../util';
import {DeleteOutlined} from '@ant-design/icons'

interface Props {
    fetchData() : void
} 

const GroupButton = (props : Props) => {

  const {fetchData} = props;

  const dispatch = useDispatch<ThunkDispatch<AppState,null,Action<String>>>();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [postAdd,setPostAdd] = React.useState<IPost>({
    id : "",
    userId :"",
    title: "",
    body :""
  })
  const [validate,setValidate] = React.useState<IPostValidate>();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const validateCheck = validatePost(postAdd);
    setValidate(validateCheck)
    if(validPost(validateCheck)) {
        dispatch(addPost(postAdd))
        setIsModalVisible(false);
        openNotification()
    } 
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteCache = () => {
    dispatch(setPost([]))
  }

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'add new post - last page',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const changeInputId = (e: any) => {
    if(parseInt(e)) {
      setPostAdd({...postAdd,id : parseInt(e)})
    } else setPostAdd({...postAdd,id : e});
  }

  const changeInputUserId = (e : any) => {
    if(parseInt(e)) {
      setPostAdd({...postAdd,userId : parseInt(e)})
    } else setPostAdd({...postAdd,userId : e});
  }
  return (
    <>
    <div className='div-btn' >
              <Button type='primary' 
                      onClick={fetchData} 
              >Get/Reload all posts</Button>
    </div>
    <div className='div-btn' >
              <Button onClick={showModal}
                      type='primary'
              >Add new post</Button>
    </div>
    <div className='div-btn'>
              <Button icon={<DeleteOutlined/>}
                      shape="round"
                      type='primary'
                      onClick={deleteCache}
              >Delete cache</Button>
    </div>
    <Modal title="Add new post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
            <Form.Item
            label="id"
            name="id"
            >
               <Input value={postAdd.id} onChange={(e) =>{changeInputId(e.target.value)}}/>
               {
                validate?.id ? <i style={{color : 'red'}}>{validate?.id}</i> : null
               }
            </Form.Item>
            <Form.Item
            label="user_id"
            name="userid"
            >
               <Input value={postAdd.userId} onChange={(e) =>{changeInputUserId(e.target.value)}}/>
               {
                validate?.userId ? <i style={{color : 'red'}}>{validate?.userId}</i> : null
               }
            </Form.Item>
            <Form.Item
            label="title"
            name="title"
            >
               <Input value={postAdd.title} onChange={(e) =>{setPostAdd({...postAdd,title : e.target.value})}}/>
               {
                validate?.title? <i style={{color : 'red'}}>{validate?.title}</i> : null
               }
            </Form.Item>
            <Form.Item
            label="body"
            name="body"
            >
               <Input value={postAdd.body} onChange={(e) =>{setPostAdd({...postAdd,body : e.target.value})}}/>
               {
                validate?.body? <i style={{color : 'red'}}>{validate?.body}</i> : null
               }
            </Form.Item>
        </Form>
    </Modal>
    </>
  )
}

export default GroupButton