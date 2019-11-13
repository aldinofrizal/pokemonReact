import React, { useState } from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'


export default function Card(props) {
    const item = props.item
    const [loading, setLoading] = useState(false)

    return (
        <View style={styles.card}>
            <Image
                onLoadStart={ () => setLoading(true)}
                onLoadEnd={ () => setLoading(false)}
                style={styles.card}
                source={{ uri: item.imageUrlHiRes }}
            /> 
            {
                (loading) ? 
                <ActivityIndicator size="large" color="#0000ff" style={ { zIndex : -100000 , top : -150 } }/>
                : 
                <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 190,
        height: 270,
        borderRadius: 10,
        marginVertical : 5,
        marginHorizontal : 2
    }
})


