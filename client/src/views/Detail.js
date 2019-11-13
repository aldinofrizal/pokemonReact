import React from 'react'
import { ScrollView, SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';

export default function Home(props) {
    const item = props.navigation.state.params.item
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView contentContainerStyle={{ flex : 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize : 36 , fontWeight : 'bold' }}>{item.name}</Text>
                <Image 
                    onLoadStart={ () => console.log('fetch detail image')}
                    onLoadEnd={ () => console.log('done')}
                    source={{ uri: item.imageUrlHiRes }}
                    style={styles.card}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 360,
        height: 540,
        borderRadius: 10,
        margin: 5,
        backgroundColor : '#000'
    }
})