import { Button, Pagination, Result } from 'antd';
import React from 'react'
import {IPost} from '../../../models/post';
import '../styles/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { setPage, setPageSize, setPost } from '../redux/homeReducer';
import { API_PATHS } from '../../../config/api';
import HomeComponent from '../components/HomeComponent';
import GroupButton from '../components/GroupButton';
import SpinPage from '../../common/components/SpinPage';

const HomePage = () => {
  
  const dispatch = useDispatch<ThunkDispatch<AppState,null,Action<String>>>();
  const stateData = useSelector((state : any) => state)
  const [loading,setLoading] = React.useState(false);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    const res = await fetch(API_PATHS.getPosts)
    .then(response =>
      response.json()  
    )
    .then(result =>{
      dispatch(setPost(result))
    }) 
    dispatch(setPage(1));
    dispatch(setPageSize(10));
    setLoading(false);
  },[]);

  const changePage = (page : number,pageSize : number) => {
    dispatch(setPage(page));
    dispatch(setPageSize(pageSize));
  }

  return (
    <div className='main'>      
          <div 
              style={{
                display : 'flex',
                flexDirection : 'row',
                width : '100%',
                justifyContent : 'center',
              }}
              className="site-page-header"
          >
          <GroupButton fetchData={fetchData} /> 
          </div>
        {
          loading ? <SpinPage /> : null
        }
        {stateData.post.post.length != 0 ? 
        <>
          <HomeComponent loading={loading}/>
        </>
        :<Result
            status="success"
            title="Successfully Connected"
            subTitle="get all data on API https://jsonplaceholder.typicode.com/posts"
            extra={[ 
            ]}
        />}
        <div className='pagination'>
           <Pagination onChange={changePage} defaultCurrent={stateData.post.page} total={stateData.post.post.length} />
        </div>
    </div>
  )
}

export default HomePage