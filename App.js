import { StyleSheet, View, Text, ScrollView } from 'react-native';
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
