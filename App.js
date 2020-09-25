import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import WikiWebView from './src/screens/WikiWebView';

const Stack = createStackNavigator();

const App = () => {
  const createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen
        name="Wiki Search"
        component={Home}
      />
      <Stack.Screen
        name="WikiWebView"
        component={WikiWebView}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>

  return (
    <Provider store={store}>
      <NavigationContainer>
        {createHomeStack()}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
