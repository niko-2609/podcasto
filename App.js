import { StyleSheet, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomTab from './components/Navigation/BottomTab';
import { StatusBar } from 'expo-status-bar'



export default function App() {
  const myTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#171717'
    },
  }
  return (
   <>
    <StatusBar style="light" />
    <View style={styles.container}>
    <NavigationContainer theme={myTheme}>
      <BottomTab />
   </NavigationContainer>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
