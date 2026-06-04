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
  subtitle: {
    color: '#4b5563',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 18,
  },
  label: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#c7d2fe',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#eef2ff',
  },
  picker: {
    width: '100%',
    color: '#111827',
  },
  dropdownTrigger: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#c7d2fe',
    borderRadius: 18,
    backgroundColor: '#eef2ff',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownTriggerPressed: {
    opacity: 0.85,
  },
  dropdownTriggerText: {
    flex: 1,
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
    paddingRight: 12,
  },
  dropdownChevron: {
    color: '#4f46e5',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 12,
  },
  dropdownModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 24, 39, 0.45)',
    justifyContent: 'center',
    padding: 18,
  },
  dropdownModalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  dropdownOption: {
    minHeight: 48,
    borderRadius: 14,
    paddingHorizontal: 14,
    justifyContent: 'center',
    marginVertical: 3,
    backgroundColor: '#f8fafc',
  },
  dropdownOptionPressed: {
    opacity: 0.85,
  },
  dropdownOptionSelected: {
    backgroundColor: '#dbeafe',
  },
  dropdownOptionText: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '600',
  },
  dropdownOptionTextSelected: {
    color: '#1d4ed8',
  },
  dropdownDoneButton: {
    marginTop: 8,
    minHeight: 46,
    borderRadius: 14,
    backgroundColor: '#4f46e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownDoneButtonPressed: {
    opacity: 0.9,
  },
  dropdownDoneButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  selectionBox: {
    marginTop: 18,
    padding: 16,
    borderRadius: 18,
    backgroundColor: '#111827',
  },
  selectionLabel: {
    color: '#a5b4fc',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  selectionValue: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
  },
});
