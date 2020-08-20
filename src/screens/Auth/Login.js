import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {TouchableHighlight} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import * as RootNavigation from '../../RootNavigation';
import FacebookButton from '../../components/FacebookButton';
import LoginScreenSeperator from '../../components/LoginScreenSeperator';
import Tools from '../../components/Tools';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import {login} from '../../actions';

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [loading, setLoading] = useState();


  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.logoView}>
          <Tools />
          <Image style={styles.logo} source={require('../../img/logo.png')} />
          <FacebookButton
            text={'Continue with Facebook'}
            onPress={() => {
              RootNavigation.navigate('Homepage');
            }}
          />
          <LoginScreenSeperator style={{marginTop: '5%'}} />
        </View>
        <View style={styles.formView}>
          <FormInput
            placeholder={'Email'}
            style={styles.formItem}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <FormInput
            placeholder={'Password'}
            style={styles.formItem}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <FormButton
            style={styles.formItem}
            text={'Log in'}
            loading={props.loading}
            onPress={() => {
              const params = {
                email,
                password,
              };
              console.log(params);
              props.login(params);
            }}
          />
          <TouchableHighlight style={{marginTop: '5%'}}>
            <Text style={{color: '#3896f0'}}>Forgot Password?</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.footer}>
            <Text style={{color: 'gray', fontSize: 16}}>
              Don't have an account?
              <Text style={{color: '#262626', fontWeight: 'bold'}}>
                {' '}
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: '50%', height: '35%'},
  formView: {flex: 1, alignItems: 'center'},
  formItem: {marginTop: '2%'},
  footer: {
    width: '100%',
    height: '25%',
    borderTopWidth: 0.5,
    backgroundColor: '#fafafa',
    borderTopColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = ({authResponse}) => {
  const {user, loading} = authResponse;
  return {user, loading};
};

export default connect(mapStateToProps, {login})(Login);
