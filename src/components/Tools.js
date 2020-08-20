import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Tools = (props) => (
  <View style={[styles.mainContainer, props.styles]}>
    <Image style={styles.moreImg} source={require('../img/more.png')} />
    <View style={styles.textContainer}>
      <Text>English</Text>
      <Image
        style={styles.arrowImg}
        source={require('../img/down-arrow.png')}
      />
    </View>
  </View>
);

var styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '-1%',
  },

  moreImg: {width: 20, height: 20, position: 'absolute', left: '6%'},

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrowImg: {width: 10, height: 10, marginLeft: '7%'},
});

export default Tools;
