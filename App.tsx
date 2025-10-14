import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import semua screen
import LoginScreen from './app/screen/login';
import HomeScreen from './app/screen/home';
import UserScreen from './app/screen/users';     // ✅ Tambahkan ini
import ProductScreen from './app/screen/products'; // ✅ Tambahkan juga kalau udah ada

const RootStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: LoginScreen,
      options: { headerShown: false },
    },
    Home: {
      screen: HomeScreen,
      options: { headerTitle: "Welcome" },
    },
    User: {
      screen: UserScreen,
      options: { headerTitle: "Daftar User" }, // ✅
    },
    Product: {
      screen: ProductScreen,
      options: { headerTitle: "Daftar Produk" }, // ✅
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
  