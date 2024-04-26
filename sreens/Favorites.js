import { View, Text, StyleSheet,ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchContacts } from '../utility/api';
import ContactThumbnail from '../components/ContactThumbnail';
import { useSelector } from 'react-redux';

const keyExtractor = ({phone}) => phone;

const Favorites = ({navigation}) => {
    //react redux
    //const {contacts, loading, error} = useSelector((state)=>state);




    //state 
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //Load du lieu
    useEffect(()=>{
        fetchContacts().then( contacts => { setContacts(contacts); setLoading(false), setError(false)})
        .catch(e=>{setLoading(false); setError(true)})
    },[])
    const renderFavoriteThumbnail = ({item})=>{
        const {avatar} = item;
        return (<ContactThumbnail avatar={avatar} onPress={()=>navigation.navigate('Profile',{contact: item})}/>)
    }
    const favorites = contacts.filter(contact => contact.favorite);

  return (
    <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading && !error && (
            <FlatList data={favorites} keyExtractor={keyExtractor} numColumns={3} contentContainerStyle={styles.list} renderItem={renderFavoriteThumbnail} />
        )}
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent:'center',
        flex:1,
    },
    list:{
        alignItems:'center'
    },
})
export default Favorites