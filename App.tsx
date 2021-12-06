import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewsScreen from './src/containers/NewsScreen/NewsScreen';
import NewsDetailScreen from './src/containers/NewsDetailScreen/NewsDetailScreen';
import { Colors } from './src/theme';
const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  NewsScreen: undefined;
  NewsDetailScreen: {
    itemId: string;
    navigation: any;
  };
};
const App: React.FC<RootStackParamList> = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: Colors.$white },
          }}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="NewsScreen"
            component={NewsScreen}
          />
          <Stack.Screen
            name="NewsDetailScreen"
            component={NewsDetailScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
