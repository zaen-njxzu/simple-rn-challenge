import React from 'react';
import { FlatList, Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FindSorted } from '../../../constants/enum/find-sorted';
import { ICON_PICK_CIRCLE, ICON_UNPICK_CIRCLE } from '../../../images';
import TextCustom from '../text';
import { ListOfSortData } from './constants';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dimBackground: {
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalView: {
        width: "90%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    itemContainer: {
        flexDirection: "row",
        paddingVertical: 10
    },
    imageSelect: {
        resizeMode: "contain",
        marginRight: 10
    }
})

const ModalSortList = ({
    modalVisible = false,
    selectedId = FindSorted.DEFAULT,
    onChooseSortBy = () => {}
}) => {

    const ModalSortItem = ({
        item
    }) => {

        const isSelected = selectedId == item.listId;

        return (
            <>
                <TouchableOpacity
                    onPress={() => {
                        onChooseSortBy(item.listId);
                    }}
                >
                    <View style={{...styles.itemContainer}}>
                        <Image style={{...styles.imageSelect}} source={isSelected ? ICON_PICK_CIRCLE : ICON_UNPICK_CIRCLE} />
                        <TextCustom>
                            {item.name}
                        </TextCustom>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{...styles.centeredView, ...styles.dimBackground}}>
                    <View style={styles.modalView}>
                        <FlatList 
                            data={ListOfSortData}
                            renderItem={ModalSortItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalSortList;