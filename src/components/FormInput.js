import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const FormInput = (props) => (
  <TextInput
    placeholder={props.placeholder}
    value={props.value}
    onChangeText={props.onChangeText}
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: '20%',
    backgroundColor: '#fafafa',
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft:15
  },
});

export default FormInput;
