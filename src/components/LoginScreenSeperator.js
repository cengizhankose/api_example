import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const LoginScreenSeperator = (props) => {
  return (
    <View style={[styles.mainContainer, props.style]}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {width: 120, height: 1, backgroundColor: 'gray'},
  text: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default LoginScreenSeperator;
