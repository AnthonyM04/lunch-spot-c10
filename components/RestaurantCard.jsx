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
  card: {
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginVertical: 12,
    padding: 28,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
  main: {
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
  },
  second: {
    fontSize: 20,
    padding: 6,
    color: 'darkgray',
  },
  img: {
    width: 300,
    height: 165,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    borderWidth: 3,
    marginBottom: 20
  }
});
