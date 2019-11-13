import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { fetch, refresh  } from '../store/action/data'
import Cards from '../components/Cards'
import SearchBar from '../components/SearchBar'

export default function Home(props) {
    const data = useSelector(state => state)
    const [refreshing, setRefeshing] = useState(false)
     
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetch())
    }, [])

   

    const toDetail = (item) => {
        props.navigation.navigate('Detail', { item })
    }

    const wait = (timeout) => {
        return new Promise( resolve => {
            setTimeout(resolve , timeout)
        })
    }

    const onRefresh = useCallback( () => {
        setRefeshing(true)
        dispatch(refresh())
        wait(10).then( () => {
            setRefeshing(false)
            dispatch(fetch())
        })
    }, [refreshing])

    if (data.loadingFetch) {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text> Loading </Text>
            </View>
        )
    } else {
        return (

            <View 
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                <SearchBar />
            
                <FlatList 
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    numColumns={2}
                    data={data.pokemon}
                    renderItem={ ({ item }) => 
                        <TouchableOpacity
                            onPress={ () => toDetail(item)}
                            >
                            <Cards item={item} />
                        </TouchableOpacity>
                    }
                    keyExtractor={ pokemon => pokemon.id}
                /> 
            </View>
        )
    }
}


const styles = StyleSheet.create({
    card: {
        width: 190,
        height: 270,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#F0F7FF'
    }
})
