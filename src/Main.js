import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/AppStack';

const Main = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Main;
