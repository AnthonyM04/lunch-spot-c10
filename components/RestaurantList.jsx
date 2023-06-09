import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard.jsx';

export default function RestaurantList () {

  const [foodList, setFoodList] = useState()

  useEffect(() => {
    fetch('https://my-first-firestore-bc.web.app/restaurants')
      .then(resp => resp.json())
      .then(setFoodList)
      // .then(data => setFoodList(data.sort(a,b) => {b.rating - a.rating}))
      .catch(alert)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant List</Text>
      <ScrollView style={styles.list}>
        {foodList && foodList.map(food => (
          <RestaurantCard food={food} key={food.id} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: 'white',
  },
  list: {
    width: '100%',
  },
  container: {
    flex: 1,
    marginTop: 56,
    marginBottom: 16,
    width: '90%',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
