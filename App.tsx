import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewsScreen from './src/containers/NewsScreen/NewsScreen';
import SettingsScreen from './src/containers/SettingsScreen/SettingsScreen';
import NewsDetailScreen from './src/containers/NewsDetailScreen/NewsDetailScreen';
import { Colors, Images } from './src/theme';
import { Provider as NewsProvider } from './src/store/contexts/NewsContext';
import { INews } from './src/store/models';
import { Image } from 'react-native';
import DefaultText from './src/components/DefaultText/DefaultText';

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
          tabBarLabel: ({ focused }) => (
            <DefaultText
              text="Home"
              style={{ color: focused ? Colors.$primary : Colors.$fontColor }}
            />
          ),
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
          tabBarLabel: ({ focused }) => (
            <DefaultText
              text="Settings"
              style={{ color: focused ? Colors.$primary : Colors.$fontColor }}
            />
          ),
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

const App: React.FC<RootStackParamList> = () => {
  const navTheme = DefaultTheme;
  navTheme.colors.background = Colors.$white;
  return (
    <SafeAreaProvider>
      <NewsProvider>
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
      </NewsProvider>
    </SafeAreaProvider>
  );
};

export default App;
