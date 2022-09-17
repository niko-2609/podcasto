import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Modal from './screens/Modal';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
