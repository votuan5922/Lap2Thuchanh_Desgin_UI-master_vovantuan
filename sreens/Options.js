import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DetailListItem from '../components/DetailListItem'
const Options = () => {
  return (
     <View style={styles.container}>
        <DetailListItem title="Update Profile" />
        <DetailListItem title="Change Language" />
        <DetailListItem title="Sign Out" />
     </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})

export default Options