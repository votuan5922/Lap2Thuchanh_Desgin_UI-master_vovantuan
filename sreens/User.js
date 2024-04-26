import { View, Text,StyleSheet,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchUserContact } from '../utility/api';
import colors from '../utility/colors';
import ContactThumbnail from '../components/ContactThumbnail';

const User = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    //Load du lieu
    useEffect(()=>{
        fetchUserContact().then( users => {setUser(users); setLoading(false);setError(false)})
        .catch(e=>{setLoading(false);setError(true);})
    },[])
    const {avatar, name, phone} =user;
  return (
    <View style={styles.container}>
        {loading && <ActivityIndicator size="large"/>}
        {error && <Text>Error...</Text>}
        {!loading && !error &&(
            <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        )}
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.blue,
    }
})
export default User