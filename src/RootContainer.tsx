/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './containers/NewsScreen/NewsScreen';
import SettingsScreen from './containers/SettingsScreen/SettingsScreen';
import NewsDetailScreen from './containers/NewsDetailScreen/NewsDetailScreen';
import { Colors, Images } from './theme';
import { INews } from './store/models';
import { Image } from 'react-native';
import { Context as NewsContext } from './store/contexts/NewsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export type RootBottomTabParamList = {
  NewsScreen: undefined;
  SettingsScreen: undefined;
};

export type RootStackParamList = {
  Tabs: RootBottomTabParamList;
  NewsDetailScreen: {
    item: INews;
  };
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        headerShown: false,
      }}>
      <Tab.Screen
        name="NewsScreen"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={focused ? Images.homeActive : Images.home}
              style={{ width: size, height: size }}
            />
          ),
        }}
        component={NewsScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={focused ? Images.settingsActive : Images.settings}
              style={{ width: size, height: size }}
            />
          ),
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

const RootContainer: React.FC = () => {
  const navTheme = DefaultTheme;
  navTheme.colors.background = Colors.$white;
  const { changeLanguage } = useContext(NewsContext);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
        changeLanguage(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { elevation: 0 },
        }}
        initialRouteName="Tabs">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={MyTabs}
        />
        <Stack.Screen
          name="NewsDetailScreen"
          component={NewsDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootContainer;
