import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useWalletConnect } from "react-native-walletconnect";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export const Main = () => {
    const {
      createSession,
      killSession,
      session,
      signTransaction,
    } = useWalletConnect();
    const hasWallet = !!session.length;
    return(
    <View style={styles.container}>
        <Text>DONE!</Text>
        {!hasWallet? 
            <Button title="Connect" onPress={() => createSession()}/>:
            <Button title="Kill Session" onPress={() => killSession()} />
        }
        {hasWallet? <Button
          title="PRESS"
          onPress={() => console.log(session)}
        /> : <></>}
        <StatusBar style="auto" />
    </View>
    )
    }