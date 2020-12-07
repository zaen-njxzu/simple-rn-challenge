import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { PRIMARY_COLOR } from '../../../constants/colors';
import { FindSorted } from '../../../constants/enum/find-sorted';
import { ICON_CHEVRON_BOTTOM, ICON_SEARCH } from '../../../images';
import CardView from '../card-view';
import TextCustom from '../text';
import { ListOfSortData } from './constants';
import ModalSortList from './modal-sort-list';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 55,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: "center"
    },
    textInput: {
        height: 45, 
        fontSize: 14
    },
    imgSearch: {
        resizeMode: "contain",
        marginHorizontal: 5
    },
    customText: {
        color: PRIMARY_COLOR,
        marginRight: 10
    },
    rightButtonSort: {
        marginLeft: "auto",
        marginRight: 5,
        flexDirection: "row"
    }
});

const SearchBar = ({ 
    onFindByText = () => {},
    onSortBy = () => {}
}) => {

    const [selectedId, setSelectedId] = useState(FindSorted.DEFAULT);
    const [modalVisible, setModalVisible] = useState(false);

    let changeTextTM = null;

    const onChangeText = (val) => {
        clearTimeout(changeTextTM);
        changeTextTM = setTimeout(() => {
            onFindByText(val);
        }, 200);
    }

    const onChooseSort = (sortedBy) => {
        setModalVisible(false);
        setSelectedId(sortedBy);
        onSortBy(sortedBy);
    }

    const getSortName = () => {
        return ListOfSortData.find(it => it.listId == selectedId).name;
    }

    return (
        <>
            <CardView style={{...styles.container}}>
                <Image
                    source={ICON_SEARCH}
                    style={{...styles.imgSearch}}
                />
                <TextInput
                    style={{...styles.textInput}}
                    placeholder="Cari nama, bank, atau nominal" 
                    onChangeText={onChangeText}
                />
                <TouchableOpacity style={{...styles.rightButtonSort}} onPress={() => { setModalVisible(true) }}>
                    <TextCustom bold h6 style={{...styles.customText}}>
                        {getSortName()}
                    </TextCustom>
                    <Image source={ICON_CHEVRON_BOTTOM} resizeMode="contain"/>
                </TouchableOpacity>
            </CardView>
            <ModalSortList modalVisible={modalVisible} selectedId={selectedId} onChooseSortBy={onChooseSort} />
        </>
    )
};

export default SearchBar;