import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  dataUser:{
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  buttonSignOut:{
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginHorizontal: 20
  }
});

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();
  function handleSignOut() {
    signOut();
  }
  return (
    <View style={styles.container}>
      <View style={styles.dataUser}>
        <Text>Name: {user?.name}</Text>
        <Text>Email: {user?.email}</Text>
      </View>
      <TouchableOpacity onPress={handleSignOut} style={styles.buttonSignOut}><Text>Logout</Text></TouchableOpacity>
    </View>
  );
};

export default Dashboard;
