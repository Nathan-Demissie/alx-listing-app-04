import { View, Text, Image, StyleSheet } from "react-native";

type Property = {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  imageUrl: string;
};

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: property.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{property.title}</Text>
      <Text style={styles.location}>{property.location}</Text>
      <Text style={styles.price}>${property.price}/night</Text>
      <Text style={styles.description}>{property.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: "#777",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: "#2B876E",
    fontWeight: "600",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#444",
  },
});
