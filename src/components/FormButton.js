import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';

const FacebookButton = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={[
      {
        backgroundColor: '#3896f0',
        width: '90%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      props.style,
    ]}>
    {props.loading ? (
      <ActivityIndicator size="small" color="white" />
    ) : (
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        {props.text}
      </Text>
    )}
  </TouchableOpacity>
);

export default FacebookButton;
