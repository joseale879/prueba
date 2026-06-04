import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
    padding: 16,
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
  message: {
    color: '#4b5563',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
  },
  list: {
    backgroundColor: '#f8fafc',
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
  },
  listItem: {
    color: '#111827',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#4f46e5',
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
});
