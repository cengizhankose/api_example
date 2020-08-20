import {
  BASE_URL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILD,
  USER,
  LOCAL_AUTH_ID,
} from './types';
import axios from 'axios';
import * as RootNavigation from '../RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

export const login = (params) => {
  return (dispatch) => {
    if (params.email != '' && params.password != '') {
      if (validateEmail(params.email)) {
        post(
          BASE_URL.concat('/login'),
          params,
          dispatch,
          LOGIN_START,
          LOGIN_SUCCESS,
          LOGIN_FAILD,
        );
      }else{
        Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!');
      }
    }else{
        Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!');
    }
  };
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function post(url, params, dispatch, start, success, faild) {
  console.log('URL=> ', url);

  const method = url.split('/').pop();
  console.log('Method => ', method);

  dispatch({type: start});

  axios({
    method: 'post',
    url,
    data: params,
  })
    .then((response) => {
      console.log('Post işlemi başarılı.');
      console.log('Gelen data => ', response.data);
      dispatch({type: success, payload: response.data});
      USER.token = response.data.token;
      AsyncStorage.setItem(LOCAL_AUTH_ID, response.data.token);
      RootNavigation.navigate('Homepage');
    })
    .catch((err) => {
      console.log('Post işlemi hatalı.', err.response.data);
      Alert.alert('Uyarı ! ', err.response.data.message);
      dispatch({type: faild});
    });
}
