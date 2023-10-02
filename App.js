import { ScrollView, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import style from './style/style';
import Gameboard from './components/Gameboard';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar style='auto' backgroundColor='#d0cbcb'></StatusBar>
      <Header />
      <ScrollView>
        <Gameboard />
      </ScrollView>
      <Footer />
    </View>
  );
}

