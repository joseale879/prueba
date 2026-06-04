import './gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, createNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';

const navigationRef = createNavigationContainerRef();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4f46e5',
    background: '#f5f7ff',
    card: '#ffffff',
    text: '#111827',
    border: '#e5e7eb',
  },
};

export default function App() {
  const [currentRoute, setCurrentRoute] = React.useState('Inicio');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="light" backgroundColor="#111827" />
        <NavigationContainer
          ref={navigationRef}
          theme={theme}
          onReady={() => {
            setCurrentRoute(navigationRef.getCurrentRoute()?.name || 'Inicio');
          }}
          onStateChange={() => {
            setCurrentRoute(navigationRef.getCurrentRoute()?.name || 'Inicio');
          }}
        >
          <AppNavigator navigationRef={navigationRef} currentRoute={currentRoute} />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
