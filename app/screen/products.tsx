import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";

const API_URL = "http://localhost:5000";

export default function ProductScreen() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch products error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <ActivityIndicator style={{ flex: 1 }} size="large" color="#007BFF" />
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Produk</Text>

      {/* Header Tabel */}
      <View style={styles.tableHeader}>
        <Text style={[styles.headerText, { flex: 1 }]}>ID</Text>
        <Text style={[styles.headerText, { flex: 3 }]}>Nama Produk</Text>
        <Text style={[styles.headerText, { flex: 4 }]}>Deskripsi</Text>
        <Text style={[styles.headerText, { flex: 2 }]}>Harga</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Stok</Text>
        <Text style={[styles.headerText, { flex: 2 }]}>Dibuat</Text>
      </View>

      {/* Isi Tabel */}
      {products.map((item) => (
        <View key={item.id} style={styles.tableRow}>
          <Text style={[styles.cellText, { flex: 1 }]}>{item.id}</Text>
          <Text style={[styles.cellText, { flex: 3 }]}>{item.title}</Text>
          <Text style={[styles.cellText, { flex: 4 }]}>{item.description}</Text>
          <Text style={[styles.cellText, { flex: 2 }]}>
            Rp{item.price.toLocaleString()}
          </Text>
          <Text style={[styles.cellText, { flex: 1 }]}>{item.stock}</Text>
          <Text style={[styles.cellText, { flex: 2 }]}>{item.created_at}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#72ca5cff",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  cellText: {
    color: "#333",
  },
});
