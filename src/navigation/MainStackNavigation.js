import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

// screen
import PlayerScreen from '../screens/PlayerScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
// const TopTab = createMaterialTopTabNavigator();
const horizontalAnimation = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const BarLabel = ({focused, color, children}) => {
  return (
    <Text
      style={{
        fontSize: 10,
        marginTop: -4,
        marginBottom: 6,
        textAlign: 'center',
        color: color,
      }}>
      {children}
    </Text>
  );
};
const MainTab = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ED1A3A',
        inactiveTintColor: 'grey',
        style: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: props => <BarLabel {...props}>Home</BarLabel>,
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={'#ED1A3A'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={{
          tabBarLabel: props => <BarLabel {...props}>Video</BarLabel>,
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Entypo name="PlayerScreen" color={'#ED1A3A'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Mian stack ;
const Stack = createStackNavigator();
const MainStack = ({navigation}) => {
  return (
    <>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{headerShown: false, title: ''}}
          name="Dashboard"
          component={MainTab}
        />
      </Stack.Navigator>
    </>
  );
};
export default MainStack;
