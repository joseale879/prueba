import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ConfigScreen from '../screens/ConfigScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const colors = {
  primary: '#7cb342',
  primaryDark: '#5f8f2f',
  dark: '#111827',
  muted: '#6b7280',
  surface: '#ffffff',
  line: '#d9e4cf',
  overlay: 'rgba(17, 24, 39, 0.42)',
  soft: '#f7faf4',
};

function HeaderButton({ icon, label, onPress, align = 'left' }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        marginLeft: align === 'left' ? 14 : 0,
        marginRight: align === 'right' ? 14 : 0,
        padding: 6,
        opacity: pressed ? 0.7 : 1,
      })}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Ionicons name={icon} size={26} color={colors.dark} />
    </Pressable>
  );
}

function DrawerHeader() {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: 190,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 28,
      }}
    >
      <View
        style={{
          width: 74,
          height: 74,
          borderRadius: 37,
          backgroundColor: 'rgba(255,255,255,0.22)',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 14,
        }}
      >
        <Ionicons name="person" size={40} color="#ffffff" />
      </View>
      <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: '800' }}>React Native Demo</Text>
      <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 6 }}>Drawer, Tabs y Stack</Text>
    </View>
  );
}

function DrawerItem({ icon, label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginHorizontal: 10,
        borderRadius: 16,
        backgroundColor: pressed ? '#eef5e6' : 'transparent',
      })}
    >
      <Ionicons name={icon} size={22} color={colors.dark} />
      <Text style={{ marginLeft: 14, fontWeight: '700', color: colors.dark }}>{label}</Text>
    </Pressable>
  );
}

function DrawerPanel({ visible, onClose, onNavigate }) {
  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: colors.overlay,
        }}
      >
        <Pressable
          onPress={() => {}}
          style={{
            width: 295,
            height: '100%',
            backgroundColor: colors.surface,
          }}
        >
          <DrawerHeader />

          <View style={{ paddingVertical: 12 }}>
            <DrawerItem icon="home-outline" label="Inicio" onPress={() => onNavigate('InicioTab')} />
            <DrawerItem icon="person-outline" label="Lenguaje" onPress={() => onNavigate('PerfilTab')} />
            <DrawerItem icon="settings-outline" label="Calculadora" onPress={() => onNavigate('ConfiguracionTab')} />
          </View>

          <View style={{ marginTop: 'auto', padding: 18, borderTopWidth: 1, borderTopColor: colors.line }}>
            <Text style={{ color: colors.muted, fontSize: 12, textTransform: 'uppercase', fontWeight: '700' }}>
              Integrantes
            </Text>
            <Text style={{ color: colors.dark, marginTop: 6, fontWeight: '700' }}>Botones, Modal, Dropdown</Text>
            <Text style={{ color: colors.dark, marginTop: 2, fontWeight: '700' }}>Calculadora, Scroll y Navegacion</Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

function HomeStack({ onOpenDrawer }) {
  return (
    <Stack.Navigator
      screenOptions={({ navigation: stackNavigation, route }) => ({
        title: route.name === 'Detail' ? 'Detalle' : 'Home Page',
        headerStyle: {
          backgroundColor: colors.surface,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.line,
        },
        headerTintColor: colors.dark,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 18,
        },
        headerLeft: () =>
          stackNavigation.canGoBack() ? (
            <HeaderButton icon="arrow-back" label="Volver" onPress={() => stackNavigation.goBack()} />
          ) : (
            <HeaderButton icon="menu" label="Abrir menu" onPress={onOpenDrawer} />
          ),
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}

function ProfileStack({ onOpenDrawer }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.line,
        },
        headerTintColor: colors.dark,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 18,
        },
        headerLeft: () => <HeaderButton icon="menu" label="Abrir menu" onPress={onOpenDrawer} />,
      }}
    >
      <Stack.Screen name="ProfileHome" component={ProfileScreen} options={{ title: 'Lenguaje' }} />
    </Stack.Navigator>
  );
}

function ConfigStack({ onOpenDrawer, tabNavigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.line,
        },
        headerTintColor: colors.dark,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 18,
        },
        headerLeft: () => <HeaderButton icon="menu" label="Abrir menu" onPress={onOpenDrawer} />,
        headerRight: () => (
          <HeaderButton
            icon="arrow-back"
            label="Volver a inicio"
            align="right"
            onPress={() => tabNavigation?.navigate?.('InicioTab')}
          />
        ),
      }}
    >
      <Stack.Screen name="ConfigHome" component={ConfigScreen} options={{ title: 'Calculadora' }} />
    </Stack.Navigator>
  );
}

function MainTabs({ onOpenDrawer }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primaryDark,
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.line,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            InicioTab: 'home-outline',
            PerfilTab: 'person-outline',
            ConfiguracionTab: 'calculator-outline',
          };

          return <Ionicons name={icons[route.name] || 'ellipse-outline'} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="InicioTab" options={{ title: 'Inicio' }}>
        {() => <HomeStack onOpenDrawer={onOpenDrawer} />}
      </Tab.Screen>
      <Tab.Screen name="PerfilTab" options={{ title: 'Lenguaje' }}>
        {() => <ProfileStack onOpenDrawer={onOpenDrawer} />}
      </Tab.Screen>
      <Tab.Screen name="ConfiguracionTab" options={{ title: 'Calculadora' }}>
        {(props) => <ConfigStack onOpenDrawer={onOpenDrawer} tabNavigation={props.navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function AppNavigator({ navigationRef }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const navigateFromDrawer = (screen) => {
    closeDrawer();

    if (navigationRef?.isReady?.()) {
      navigationRef.navigate('MainTabs', { screen });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.soft }}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainTabs">
          {() => <MainTabs onOpenDrawer={openDrawer} />}
        </RootStack.Screen>
      </RootStack.Navigator>
      <DrawerPanel visible={drawerOpen} onClose={closeDrawer} onNavigate={navigateFromDrawer} />
    </View>
  );
}
