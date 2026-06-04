import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles/HomeScreenStyles';

const PAGE_SIZE = 8;
const MAX_ITEMS = 32;

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('Presiona un botón para empezar');
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  const loadMoreItems = () => {
    if (loading || items.length >= MAX_ITEMS) return;

    setLoading(true);
    timeoutRef.current = setTimeout(() => {
      setItems((currentItems) => {
        const startIndex = currentItems.length + 1;
        const newItems = Array.from({ length: PAGE_SIZE }, (_, index) => ({
          id: String(startIndex + index),
          title: `Elemento ${startIndex + index}`,
          subtitle: 'Scroll Loading con FlatList',
        }));

        return [...currentItems, ...newItems];
      });
      setLoading(false);
    }, 900);
  };

  useEffect(() => {
    loadMoreItems();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const actions = [
    {
      label: 'Mostrar mensaje',
      description: 'Actualiza el texto superior',
      onPress: () => setMessage('Has presionado Mostrar mensaje'),
    },
    {
      label: 'Abrir modal',
      description: 'Muestra un cuadro de diálogo',
      onPress: () => {
        setMessage('Se abrió el modal');
        setModalVisible(true);
      },
    },
    {
      label: 'Ir a detalle',
      description: 'Navega a la pantalla Detalle',
      onPress: () => {
        setMessage('Navegando a Detalle...');
        navigation.navigate('Detalle');
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.25}
        ListHeaderComponent={
          <View>
            <View style={styles.heroCard}>
              <Text style={styles.kicker}>Guía Expo / React Native</Text>
              <Text style={styles.title}>Componentes básicos y navegación</Text>
              <Text style={styles.subtitle}>
                Esta pantalla reúne botones, modal y lista con carga para evidenciar la actividad.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Uso de botones</Text>
              {actions.map((action) => (
                <Pressable
                  key={action.label}
                  onPress={action.onPress}
                  style={({ pressed }) => [
                    styles.actionButton,
                    pressed && styles.actionButtonPressed,
                  ]}
                >
                  <Text style={styles.actionButtonText}>{action.label}</Text>
                  <Text style={styles.actionButtonNote}>{action.description}</Text>
                </Pressable>
              ))}
              <Text style={styles.message}>{message}</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Dialog / Modal</Text>
              <Pressable
                onPress={() => setModalVisible(true)}
                style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
              >
                <Text style={styles.primaryButtonText}>Abrir modal informativo</Text>
              </Pressable>
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Scroll Loading</Text>
              <Text style={styles.helperText}>
                Desliza hacia abajo para cargar más elementos con FlatList.
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>{item.title}</Text>
            <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            {loading ? (
              <>
                <ActivityIndicator size="small" color="#4f46e5" />
                <Text style={styles.footerText}>Cargando más elementos...</Text>
              </>
            ) : (
              <Text style={styles.footerText}>
                {items.length >= MAX_ITEMS ? 'No hay más elementos por cargar' : 'Toca más abajo para continuar'}
              </Text>
            )}
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Modal informativo</Text>
            <Text style={styles.modalText}>
              Este modal cumple la parte de Dialog / Modal y puede abrirse y cerrarse correctamente en Android, iOS y web.
            </Text>

            <View style={styles.modalActions}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={({ pressed }) => [styles.secondaryButton, pressed && styles.secondaryButtonPressed]}
              >
                <Text style={styles.secondaryButtonText}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
