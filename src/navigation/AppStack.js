import React from 'react';
import MainStack from './MainStackNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet, SafeAreaView, View} from 'react-native';
const Drawer = createDrawerNavigator();
const AppStak = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Drawer.Navigator>
        <Drawer.Screen name="App" component={MainStack} />
      </Drawer.Navigator>
      <View style={styles.fixBackground} />
    </SafeAreaView>
  );
};
export default AppStak;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixBackground: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
    zIndex: -1000,
  },
});
