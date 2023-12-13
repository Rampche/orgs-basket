import { StatusBar, SafeAreaView, View, StyleSheet } from 'react-native';
import Cesta from './src/screens/Basket';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import mock from './src/mocks/Basket';

export default function App() {
  const [loadedFont] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!loadedFont) {
    return <View />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Cesta {...mock} />
      <StatusBar />
    </SafeAreaView>
  );
}
