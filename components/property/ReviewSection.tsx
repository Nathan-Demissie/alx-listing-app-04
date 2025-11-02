import axios from "axios";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

type Review = {
  id: string;
  comment: string;
  rating?: number;
  reviewer?: string;
};

export default function ReviewSection({ propertyId }: { propertyId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        setError("Failed to load reviews.");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#2B876E" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reviews</Text>
      {reviews.length === 0 ? (
        <Text style={styles.noReviews}>No reviews yet.</Text>
      ) : (
        reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <Text style={styles.comment}>{review.comment}</Text>
            {review.reviewer && <Text style={styles.reviewer}>— {review.reviewer}</Text>}
            {review.rating && <Text style={styles.rating}>Rating: {review.rating}/5</Text>}
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },
  noReviews: {
    fontSize: 16,
    color: "#777",
  },
  reviewCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  comment: {
    fontSize: 16,
    color: "#333",
  },
  reviewer: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: "#2B876E",
    marginTop: 5,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});
