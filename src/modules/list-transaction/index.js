import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SearchBar from '../../components/ui/search-bar';
import { BACKGROUND_COLOR } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15
    }
});

class ListTransaction extends Component {


    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{...styles.container}}>
                    <SearchBar 
                        onFindByText={val => console.warn(val)} 
                        onSortBy={val => console.warn(val)} />
                </View>
            </TouchableWithoutFeedback>
        )
    }

}


export default ListTransaction;