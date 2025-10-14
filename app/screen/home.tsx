import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  Login: undefined;
  Home: { token: string };
  User: { token: string };
  Product: { token: string };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<{ route: any }> = ({ route }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { token } = route.params;

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Selamat Datang!</Text>
        <Text style={styles.sub}>Kelola data akun & produk Anda</Text>
      </View>

      {/* Tombol Navigasi */}
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: '#e07089ff' }]}
          onPress={() => navigation.navigate('User', { token })}
        >
          <Ionicons name="people-outline" size={26} color="white" />
          <Text style={styles.navButtonText}>User</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: '#72ca5cff' }]}
          onPress={() => navigation.navigate('Product', { token })}
        >
          <Ionicons name="cube-outline" size={26} color="white" />
          <Text style={styles.navButtonText}>Product</Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={22} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Token Info */}
      {/* <View style={styles.tokenCard}>
        <Text style={styles.label}>Token Anda:</Text>
        <Text style={styles.token}>{token}</Text>
      </View> */}

      {/* Credit / Footer */}
      <View style={styles.footer}>
        <Text style={styles.credit}>© 2025 Rafikah Nadhif Maulidina — 230444040025 — UAS Mobile Progamming 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f9fafc', 
    padding: 20 
  },
  header: { 
    backgroundColor: '#eef3a8ff', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 25, 
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  welcome: { 
    color: 'dark', 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
  sub: { 
    color: 'dark', 
    textAlign: 'center', 
    marginTop: 5,
    fontSize: 14 
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  navButton: {
    flex: 1,
    marginHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  navButtonText: { 
    color: 'white', 
    fontWeight: 'bold', 
    marginTop: 8, 
    fontSize: 16 
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  tokenCard: {
    backgroundColor: 'white',
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: { 
    fontWeight: 'bold', 
    marginBottom: 6, 
    fontSize: 14 
  },
  token: { 
    fontSize: 12, 
    color: '#333' 
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  credit: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default HomeScreen;
