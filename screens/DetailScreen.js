import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import styles from './styles/DetailScreenStyles';

export default function DetailScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.kicker}>Stack Navigation</Text>
        <Text style={styles.title}>Pantalla de detalle</Text>
        <Text style={styles.message}>
          Esta pantalla sirve para demostrar navegación entre vistas dentro del Stack y retorno con el botón de volver.
        </Text>

        <View style={styles.list}>
          <Text style={styles.listItem}>• Ruta accesible desde Home</Text>
          <Text style={styles.listItem}>• Retorno con goBack()</Text>
          <Text style={styles.listItem}>• Compatible con Android, iOS y web</Text>
        </View>

        <Pressable
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
              return;
            }

            navigation.navigate('Inicio');
          }}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
        >
          <Text style={styles.primaryButtonText}>Volver</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
