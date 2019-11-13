import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextInput, StyleSheet, Keyboard, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { search as fetchSearch } from '../store/action/data'


export default function SearchBar(props) {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [textInputBorder, setTextInputBorder] = useState({
        width: .5,
        color: 'grey'
    })

    const onSearchChange = (text) => {
        setSearchValue(text)
    }

    const search = () => {
        dispatch(fetchSearch(searchValue))
        Keyboard.dismiss
    }

    return (
        <View style={{  flexDirection :'row' }}>
            <TextInput
                style={{ ...styles.searchBar, borderColor: textInputBorder.color, borderWidth: textInputBorder.width, }}
                onChangeText={(text) => onSearchChange(text)}
                placeholder='search cards by name'
                onFocus={() => setTextInputBorder({ width: 1, color: '#0000ff' })}
                onBlur={() => {
                    setTextInputBorder({ width: .5, color: 'grey' })
                    Keyboard.dismiss
                    setSearchValue('')
                }}
                onSubmitEditing={ () => search()}
                value={searchValue}
            />
            <TouchableOpacity
                onPress={ () => search()}
                >
                <FontAwesome name='search' size={25} color='grey' style={{ top: 18 }}/>
            </TouchableOpacity>
            
        </View>
    )

}

const styles = StyleSheet.create({
    searchBar: {
        height : 40, 
        width : '80%', 
        paddingHorizontal : 15,
        marginVertical : 10,
        marginHorizontal : 10,
        borderRadius : 10
    }  
})