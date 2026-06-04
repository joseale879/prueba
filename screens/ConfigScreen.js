import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles/ConfigScreenStyles';

function normalizeNumber(value) {
  const parsed = parseFloat(String(value).replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : null;
}

export default function ConfigScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('Escribe dos numeros y elige una operacion');

  const calculate = (operation) => {
    const a = normalizeNumber(num1);
    const b = normalizeNumber(num2);

    if (a === null || b === null) {
      setResult('Por favor ingresa numeros validos');
      return;
    }

    switch (operation) {
      case 'sum':
        setResult(`Resultado: ${a + b}`);
        break;
      case 'rest':
        setResult(`Resultado: ${a - b}`);
        break;
      case 'mul':
        setResult(`Resultado: ${a * b}`);
        break;
      case 'div':
        setResult(b === 0 ? 'Error: division por cero' : `Resultado: ${a / b}`);
        break;
      default:
        setResult('Operacion no valida');
    }
  };

  const operations = [
    { symbol: '+', label: 'Sumar', key: 'sum', color: styles.sumButton },
    { symbol: '-', label: 'Restar', key: 'rest', color: styles.restButton },
    { symbol: 'x', label: 'Multiplicar', key: 'mul', color: styles.mulButton },
    { symbol: '/', label: 'Dividir', key: 'div', color: styles.divButton },
  ];

  return (
    <Pressable style={styles.screen} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <Text style={styles.kicker}>Calculadora basica</Text>
              <Text style={styles.title}>Suma, resta, multiplicacion y division</Text>
              <Text style={styles.subtitle}>
                La interfaz valida entradas vacias y evita dividir entre cero.
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Numero 1"
                placeholderTextColor="#94a3b8"
                keyboardType="decimal-pad"
                value={num1}
                onChangeText={setNum1}
              />
              <TextInput
                style={styles.input}
                placeholder="Numero 2"
                placeholderTextColor="#94a3b8"
                keyboardType="decimal-pad"
                value={num2}
                onChangeText={setNum2}
              />

              <View style={styles.buttonsGrid}>
                {operations.map((operation) => (
                  <Pressable
                    key={operation.key}
                    onPress={() => calculate(operation.key)}
                    style={({ pressed }) => [
                      styles.opButton,
                      operation.color,
                      pressed && styles.opButtonPressed,
                    ]}
                  >
                    <Text style={styles.opSymbol}>{operation.symbol}</Text>
                    <Text style={styles.opLabel}>{operation.label}</Text>
                  </Pressable>
                ))}
              </View>

              <View style={styles.resultBox}>
                <Text style={styles.resultLabel}>Resultado</Text>
                <Text style={styles.result}>{result}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Pressable>
  );
}
