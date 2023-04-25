import { StyleSheet, View } from 'react-native';
import RestaurantList from './components/RestaurantList';

export default function App() {
  return(
    <View style={styles.container}>
      <RestaurantList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfcadb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
