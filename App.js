import RestaurantList from './components/RestaurantList';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return(
    <View style={styles.container}>
      <RestaurantList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ede8ff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
