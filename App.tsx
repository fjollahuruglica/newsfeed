import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewsScreen from './src/containers/NewsScreen/NewsScreen';
import SettingsScreen from './src/containers/SettingsScreen/SettingsScreen';
import NewsDetailScreen from './src/containers/NewsDetailScreen/NewsDetailScreen';
import { Colors } from './src/theme';
import { Provider as NewsProvider } from './src/store/contexts/NewsContext';
import { INews } from './src/store/models';

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
      <Tab.Screen name="NewsScreen" component={NewsScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App: React.FC<RootStackParamList> = () => {
  return (
    <SafeAreaProvider>
      <NewsProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { elevation: 0 },
              cardStyle: { backgroundColor: Colors.$white },
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
