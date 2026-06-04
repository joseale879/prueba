import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
  },
  listContent: {
    padding: 16,
    paddingBottom: 28,
  },
  heroCard: {
    backgroundColor: '#111827',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
  },
  kicker: {
    color: '#a5b4fc',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
    marginBottom: 10,
  },
  subtitle: {
    color: '#c7d2fe',
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
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
  sectionTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: '#eef2ff',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#c7d2fe',
  },
  actionButtonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.95,
  },
  actionButtonText: {
    color: '#1e1b4b',
    fontSize: 16,
    fontWeight: '800',
  },
  actionButtonNote: {
    color: '#4b5563',
    fontSize: 13,
    marginTop: 2,
  },
  message: {
    marginTop: 6,
    color: '#111827',
    fontSize: 15,
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
  helperText: {
    color: '#4b5563',
    fontSize: 14,
    lineHeight: 20,
  },
  listItem: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 10,
  },
  listItemTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
  listItemSubtitle: {
    color: '#6b7280',
    fontSize: 13,
    marginTop: 4,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 18,
  },
  footerText: {
    color: '#6b7280',
    fontSize: 13,
    marginTop: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 24, 39, 0.58)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
  },
  modalTitle: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },
  modalText: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 22,
  },
  modalActions: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  secondaryButton: {
    backgroundColor: '#e5e7eb',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  secondaryButtonPressed: {
    opacity: 0.85,
  },
  secondaryButtonText: {
    color: '#111827',
    fontWeight: '800',
  },
});
