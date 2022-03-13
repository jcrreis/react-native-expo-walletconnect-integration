import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './src/Main'
import WalletConnectProvider from "react-native-walletconnect"

const App = () => {
  return (
    <WalletConnectProvider>
      <Main/>
    </WalletConnectProvider>
  );
}

export default App;