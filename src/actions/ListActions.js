import {LIST_START, LIST_SUCCESS, LIST_FAILD, BASE_URL} from './types';
import axios from 'axios'
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export const getList = (params) => {
  return (dispatch) => {
    get(
      BASE_URL.concat('/api/characters'),
      params ? params : {},
      dispatch,
      LIST_START,
      LIST_SUCCESS,
      LIST_FAILD,
    );
  };
};

function get(url, params, dispatch, start, success, faild) {
  console.log('URL=> ', url);

  const method = url.split('/').pop();
  console.log('Method => ', method);

  dispatch({type: start});

  axios({
    method: 'get',
    url,
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzk4ZjNkZmQ5OGIzMDAxNzRhZmQxYiIsImlhdCI6MTU5Nzg1NjE3NiwiZXhwIjoxNTk4MDI4OTc2fQ.t7TPIu1T8NVb5zKExnUNPXSmIRbz8QvagBXd5QPe928',
    },
  })
    .then((response) => {
      console.log('GET işlemi başarılı.');
      console.log('Gelen data => ', response.data);
      dispatch({type: success, payload: response.data});
    })
    .catch((err) => {
      console.log('GET işlemi hatalı.', err.response.data);
      Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu!');
      dispatch({type: faild});
    });
}
