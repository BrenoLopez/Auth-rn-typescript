import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonSignIn:{
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginHorizontal: 20
  }
});

const SigIn: React.FC = () => {
  const {signIn} = useAuth();

  async function handleSignIn() {
    await signIn();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignIn} style={styles.buttonSignIn}><Text>Sign In</Text></TouchableOpacity>
    </View>
  );
};

export default SigIn;
