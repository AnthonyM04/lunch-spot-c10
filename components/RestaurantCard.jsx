import { View, Text, Image, StyleSheet } from "react-native";

export default function RestaurantCard({food}) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{ uri: food.image }} />
      <Text style={styles.main}>{food.name}</Text>
      <Text style={styles.second}>{food.cuisine} | ⭐️{food.rating} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    fontSize: 24
  },
  second: {
    fontSize: 20,
    color: 'darkgray',
    
  },
  img: {
    alignItems: 'center',
    width: 340,
    height: 200,
    borderRadius: 6,
  },
  card: {
    width: '100%',
    marginTop: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
    borderColor: '#F3F4F5',
    borderWidth: 2,
    backgroundColor: 'white',
    },
});
