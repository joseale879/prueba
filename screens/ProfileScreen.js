import React, { useState } from 'react';
import {
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles/ProfileScreenStyles';

const options = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'csharp' },
  { label: 'TypeScript', value: 'typescript' },
];

export default function ProfileScreen() {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const selectedLabel = options.find((option) => option.value === selectedValue)?.label || selectedValue;

  const selectOption = (value) => {
    setSelectedValue(value);
    setDropdownVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.kicker}>Perfil</Text>
        <Text style={styles.title}>Elige tus preferencias</Text>
        <Text style={styles.subtitle}>
          Selecciona un lenguaje favorito en este perfil de usuario.
        </Text>

        <Text style={styles.label}>Selecciona una opcion</Text>

        {Platform.OS === 'ios' ? (
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={styles.picker}
            >
              {options.map((option) => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
              ))}
            </Picker>
          </View>
        ) : (
          <>
            <Pressable
              onPress={() => setDropdownVisible(true)}
              style={({ pressed }) => [
                styles.dropdownTrigger,
                pressed && styles.dropdownTriggerPressed,
              ]}
            >
              <Text style={styles.dropdownTriggerText}>{selectedLabel}</Text>
              <Text style={styles.dropdownChevron}>v</Text>
            </Pressable>

            <Modal
              transparent
              animationType="fade"
              visible={dropdownVisible}
              onRequestClose={() => setDropdownVisible(false)}
            >
              <Pressable
                style={styles.dropdownModalOverlay}
                onPress={() => setDropdownVisible(false)}
              >
                <Pressable style={styles.dropdownModalCard} onPress={() => {}}>
                  {options.map((option) => {
                    const isSelected = option.value === selectedValue;

                    return (
                      <Pressable
                        key={option.value}
                        onPress={() => selectOption(option.value)}
                        style={({ pressed }) => [
                          styles.dropdownOption,
                          isSelected && styles.dropdownOptionSelected,
                          pressed && styles.dropdownOptionPressed,
                        ]}
                      >
                        <Text
                          style={[
                            styles.dropdownOptionText,
                            isSelected && styles.dropdownOptionTextSelected,
                          ]}
                        >
                          {option.label}
                        </Text>
                      </Pressable>
                    );
                  })}

                  <Pressable
                    onPress={() => setDropdownVisible(false)}
                    style={({ pressed }) => [
                      styles.dropdownDoneButton,
                      pressed && styles.dropdownDoneButtonPressed,
                    ]}
                  >
                    <Text style={styles.dropdownDoneButtonText}>Cerrar</Text>
                  </Pressable>
                </Pressable>
              </Pressable>
            </Modal>
          </>
        )}

        <View style={styles.selectionBox}>
          <Text style={styles.selectionLabel}>Valor seleccionado</Text>
          <Text style={styles.selectionValue}>{selectedLabel}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
