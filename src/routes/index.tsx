import React from 'react';
import AuthRoutes from './auth.routes';
import {useAuth} from '../contexts/auth';
import AppRoutes from './app.routes';
import {View, StyleSheet,ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
    activeIndicator: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const Routes: React.FC = () =>{
  const {loading,signed} = useAuth();
  if (loading) {
    return (
      <View style={styles.activeIndicator}>
        <ActivityIndicator
          size="large"
          color="#6666"         
        />
      </View>
    );
  }

    return signed ? <AppRoutes/> : <AuthRoutes/>;
}
export default Routes;