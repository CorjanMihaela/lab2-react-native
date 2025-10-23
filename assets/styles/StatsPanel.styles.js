import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  panel: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333'
  },
  entry: {
    fontSize: 16,
    marginVertical: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    color: '#444'
  },
  empty: {
    fontStyle: 'italic',
    color: '#888',
    fontSize: 16,
    marginTop: 10
  }
});
