import React, { useEffect, useState } from 'react'
import { Text, Image, View, Animated } from 'react-native';

export default function Header(props) {
    const [ position, setPosition ] =  useState( new Animated.Value(-350) )
    useEffect( () => {
        Animated.loop(
            Animated.timing( position, {
                toValue : 350,
                duration : 3000
            })
        ).start()

    }, [])

    return (
        <> 
                <Image 
                    source={require('../../assets/International_Pokémon_logo.svg.png')}
                    style={{height: 160, width : '80%', resizeMode : 'contain'}}
                />
                <Text>Pokemon TCG</Text>
                <Text>Cards Dataset</Text>
                <Text>Swipe up to see cards!</Text>
                <Animated.Image 
                    source={require('../../assets/walkingPika.gif')}
                    style={{height: 160, width : '90%', resizeMode : 'contain' , left: position}}
                />
        </>
    )
}


