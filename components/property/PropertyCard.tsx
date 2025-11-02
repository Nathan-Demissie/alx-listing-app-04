import { View, Text, Image, StyleSheet } from "react-native";

type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: property.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{property.title}</Text>
      <Text style={styles.location}>{property.location}</Text>
      <Text style={styles.price}>${property.price}/night</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  location: {
    fontSize: 14,
    color: "#777",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#2B876E",
    fontWeight: "500",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
