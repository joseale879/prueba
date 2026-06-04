import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ConfigScreen from '../screens/ConfigScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

const colors = {
  primary: '#4f46e5',
  dark: '#111827',
  muted: '#6b7280',
  border: '#e5e7eb',
  white: '#ffffff',
};

function baseStackOptions() {
  return {
    headerStyle: {
      backgroundColor: colors.white,
      borderBottomColor: colors.border,
      shadowColor: 'transparent',
    },
    headerTintColor: colors.dark,
    headerTitleStyle: { fontWeight: '700' },
    headerTitleAlign: 'center',
  };
}

function MenuButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ marginLeft: 16, opacity: pressed ? 0.6 : 1 }]}
    >
      <Ionicons name="menu-outline" size={30} color={colors.dark} />
    </Pressable>
  );
}

function MenuSheet({ visible, onClose, onNavigate, currentRoute }) {
  const items = [
    { label: 'Inicio', route: 'Inicio', icon: 'home-outline' },
    { label: 'Lenguajes', route: 'Lenguajes', icon: 'language-outline' },
    { label: 'Calculadora', route: 'Calculadora', icon: 'calculator-outline' },
  ];

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <SafeAreaView>
            <Text style={styles.sheetTitle}>Menu</Text>
            <Text style={styles.sheetSubtitle}>Navega rapido entre secciones</Text>

            <View style={styles.itemList}>
              {items.map((item) => {
                const active = currentRoute === item.route;

                return (
                  <Pressable
                    key={item.route}
                    onPress={() => onNavigate(item.route)}
                    style={({ pressed }) => [
                      styles.item,
                      active && styles.itemActive,
                      pressed && styles.itemPressed,
                    ]}
                  >
                    <Ionicons
                      name={item.icon}
                      size={20}
                      color={active ? colors.primary : colors.dark}
                    />
                    <Text style={[styles.itemText, active && styles.itemTextActive]}>
                      {item.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </SafeAreaView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

export default function AppNavigator({ navigationRef, currentRoute }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const navigateFromMenu = (route) => {
    setMenuVisible(false);

    if (!navigationRef || !navigationRef.isReady()) {
      return;
    }

    navigationRef.reset({
      index: 0,
      routes: [{ name: route }],
    });
  };

  return (
    <>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          ...baseStackOptions(),
          headerLeft: () => <MenuButton onPress={() => setMenuVisible(true)} />,
        })}
      >
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            title: 'Inicio',
          }}
        />
        <Stack.Screen
          name="Lenguajes"
          component={ProfileScreen}
          options={{
            title: 'Lenguajes',
          }}
        />
        <Stack.Screen
          name="Calculadora"
          component={ConfigScreen}
          options={{
            title: 'Calculadora',
          }}
        />
        <Stack.Screen
          name="Detalle"
          component={DetailScreen}
          options={{
            title: 'Detalle',
          }}
        />
      </Stack.Navigator>

      <MenuSheet
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={navigateFromMenu}
        currentRoute={currentRoute}
      />
    </>
  );
}

const styles = {
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 24, 39, 0.45)',
  },
  sheet: {
    width: 270,
    height: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 18,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
  },
  sheetTitle: {
    color: colors.dark,
    fontSize: 22,
    fontWeight: '800',
  },
  sheetSubtitle: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 4,
    marginBottom: 18,
  },
  itemList: {
    gap: 10,
  },
  item: {
    minHeight: 56,
    borderRadius: 16,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  itemActive: {
    backgroundColor: '#eef2ff',
    borderColor: '#c7d2fe',
  },
  itemPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  itemText: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: '700',
  },
  itemTextActive: {
    color: colors.primary,
  },
};
