import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextCustom from '../../../components/ui/text';
import { PRIMARY_COLOR, SUCCESS_COLOR } from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        padding: 8
    },
    containerSuccess: {
        backgroundColor: SUCCESS_COLOR
    },
    containerPending: {
        borderColor: PRIMARY_COLOR,
        borderWidth: 1
    },
    textPending: {
        color: "black"
    },
    textSuccess: {
        color: "white"
    }
})

const InfoText = ({status = "SUCCESS"}) => {

    let text = "";
    let containerStyle = [styles.container];
    let textStyle = [];

    switch (status) {
        case "PENDING":
            text = "Pengecekan";
            containerStyle.push(styles.containerPending);
            textStyle.push(styles.textPending);
            break;
        case "SUCCESS":
            text = "Berhasil";
            containerStyle.push(styles.containerSuccess);
            textStyle.push(styles.textSuccess);
            break;
        default:
            break;
    }

    return (
        <View style={containerStyle}>
            <TextCustom p bold style={textStyle}>{text}</TextCustom>
        </View>
    )
}

export default InfoText;