import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { fetchContacts, fetchRandomContact } from './utility/api';
import Contacts from './sreens/contacts';
import Profile from './sreens/profile';
import StackNavigator from './router/routes'
import Favorites from './sreens/Favorites';
import User from './sreens/User';
import TabNavigator from './router/routes';
import { Provider } from 'react-redux';
import store from './sreens/store';
export default function App() {
  // useEffect(()=>{
  //   fetchRandomContact().then(data=>console.log(data))
  // },[])
  return (
    // <View style={{flex:1}}>
    // </View>
    <Provider store={store}>
      <TabNavigator/>
      <StatusBar style="auto" />
   </Provider>
  );
};
  