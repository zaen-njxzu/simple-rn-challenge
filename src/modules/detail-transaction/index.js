import React, { Component } from 'react';
import { Image, Platform, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native';
import TextCustom from '../../components/ui/text';
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../../constants/colors';
import { ICON_COPY } from '../../images';
import Clipboard from '@react-native-community/clipboard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR
    },
    contentContainer: {
        backgroundColor: "white",
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginBottom: 1
    },
    topContent: {
        marginTop: 20,
        flexDirection: "row"
    },
    copyBtn: {
        marginLeft: 10
    },
    middleContent: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    closeText: {
        color: PRIMARY_COLOR
    },
    contentInsideContainer: {
        flexDirection: "row", 
        marginTop: 20
    }
})

const TopBottomText = ({
    topText = "",
    bottomText = ""
}) => {
    return (
        <View style={{flex: 1}}>
            <TextCustom bold h5>{topText}</TextCustom>
            <TextCustom h5>{bottomText}</TextCustom>
        </View>
    )
}

class DetailTransaction extends Component {

    state = {
        isShowDetailTrx: true
    }

    copyToClipboard = (text) => {
        Clipboard.setString(text);
        if(Platform.OS == "android") ToastAndroid.show("Berhasil disalin.", ToastAndroid.LONG);
    }

    render() {
        const data = this.props.navigation.getParam('transactionDetail', {});

        return(
            <View style={{...styles.container}}>
                <View style={{...styles.contentContainer, ...styles.topContent}}>
                    <TextCustom bold h5>{"ID TRANSAKSI: #"+data.id}</TextCustom>
                    <TouchableOpacity style={{...styles.copyBtn}} onPress={() => { this.copyToClipboard(data.id) }}>
                        <Image source={ICON_COPY} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <View style={{...styles.contentContainer, ...styles.middleContent}}>
                    <TextCustom bold h5>DETAIL TRANSAKSI</TextCustom>
                    <TouchableOpacity onPress={() => { this.setState((prevState, props) => ({ isShowDetailTrx: !prevState.isShowDetailTrx }) ) }}>
                        <TextCustom h5 style={{...styles.closeText}}>{this.state.isShowDetailTrx ? "Tutup" : "Buka"}</TextCustom>
                    </TouchableOpacity>
                </View>
                {this.state.isShowDetailTrx ? 
                    <View style={{...styles.contentContainer}}>
                        <TextCustom bold h5>{data.sender_bank+" -> "+data.beneficiary_bank}</TextCustom>
                        <View style={{...styles.contentInsideContainer}}>
                            <TopBottomText topText={data.beneficiary_name} bottomText={data.account_number} />
                            <TopBottomText topText={"NOMINAL"} bottomText={data.amount} />
                        </View>
                        <View style={{...styles.contentInsideContainer}}>
                            <TopBottomText topText={"BERITA TRANSFER"} bottomText={data.remark} />
                            <TopBottomText topText={"KODE UNIK"} bottomText={data.unique_code} />
                        </View>
                        <View style={{...styles.contentInsideContainer}}>
                            <TopBottomText topText={"WAKTU DIBUAT"} bottomText={data.created_at} />
                        </View>
                    </View>
                : null}
            </View>
        )
    }
};


export default DetailTransaction;