import React from 'react'
import { Text, View, Image } from 'react-native';

export default function Collection(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height : '100%' , backgroundColor : "#F3FCFF" }}>
            <Image 
                source={require('../../assets/walkingPika.gif')}
                style={{ width : 200, height : 500, resizeMode : 'contain' }}
            />
            <Text style={{ top : -180 }}> This Page is still under construction. Come back later.. </Text>
        </View>
    )
}