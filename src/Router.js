import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';

import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import AddCharacter from './screens/Home/AddCharacter';
import Homepage from './screens/Home/Homepage';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddCharacter"
          component={AddCharacter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
