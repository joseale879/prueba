import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f7ff',
  },
  avoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
    paddingHorizontal: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    ...Platform.select({
      ios: {
        shadowColor: '#111827',
        shadowOpacity: 0.08,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0 12px 30px rgba(17, 24, 39, 0.08)',
      },
    }),
  },
  kicker: {
    color: '#4f46e5',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    color: '#111827',
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 32,
    marginBottom: 10,
  },
  subtitle: {
    color: '#4b5563',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 18,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 12,
    color: '#111827',
    fontSize: 16,
    marginBottom: 12,
  },
  buttonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  opButton: {
    width: '48%',
    minHeight: 84,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    paddingVertical: 10,
  },
  opButtonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  sumButton: {
    backgroundColor: '#dbeafe',
  },
  restButton: {
    backgroundColor: '#ede9fe',
  },
  mulButton: {
    backgroundColor: '#dcfce7',
  },
  divButton: {
    backgroundColor: '#fee2e2',
  },
  opSymbol: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 28,
  },
  opLabel: {
    color: '#374151',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'center',
  },
  resultBox: {
    marginTop: 8,
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 16,
  },
  resultLabel: {
    color: '#a5b4fc',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  result: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
});
