import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView } from "react-native";

const API_URL = "http://localhost:5000";

export default function UserScreen() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Fetch users error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" color="#007BFF" />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar User</Text>

      {/* Header Tabel */}
      <View style={styles.tableHeader}>
        <Text style={[styles.headerText, { flex: 1 }]}>Id</Text>
        <Text style={[styles.headerText, { flex: 3 }]}>Email</Text>
        <Text style={[styles.headerText, { flex: 2 }]}>Nama</Text>
        <Text style={[styles.headerText, { flex: 2 }]}>Dibuat</Text>
      </View>

      {/* Isi Tabel */}
      {users.map((item) => (
        <View key={item.id} style={styles.tableRow}>
          <Text style={[styles.cellText, { flex: 1 }]}>{item.id}</Text>
          <Text style={[styles.cellText, { flex: 3 }]}>{item.email}</Text>
          <Text style={[styles.cellText, { flex: 2 }]}>{item.name}</Text>
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
    backgroundColor: "#e07089ff",
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
