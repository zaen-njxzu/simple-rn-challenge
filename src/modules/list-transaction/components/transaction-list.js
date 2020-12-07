import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SideLineCardView from '../../../components/ui/side-line-card-view';
import TextCustom from '../../../components/ui/text';
import { convertToRupiahText, getMonthId } from '../../../services/data-services';
import InfoText from './info-text';

const styles = StyleSheet.create({
    containerCardView: {
        marginTop: 15
    },
    contentContainer: {
        flexDirection: "row", 
        marginVertical: 10, 
        paddingHorizontal: 12
    },
    leftContent: {
        marginRight: "auto"
    },
    rightContent: {
        justifyContent: "center"
    }
})

const TransactionList = ({
    data = [],
    onSelectTransaction = () => {}
}) => {

    const TransactionItem = ({item}) => {
        let newItem = item;
        const date = getDate(item.created_at);
        const beneficiary_bank = convertBankCase(newItem.beneficiary_bank);
        const sender_bank = convertBankCase(newItem.sender_bank);
        const amount = convertToRupiahText(newItem.amount);

        newItem = {
            ...newItem,
            created_at: date,
            beneficiary_bank,
            sender_bank,
            amount
        };

        return (
            <SideLineCardView sideType={newItem.status} style={{...styles.containerCardView}} onPress={() => { onSelectTransaction(newItem) }}>
                <View style={{...styles.contentContainer}}>
                    <View style={{...styles.leftContent}}>
                        <TextCustom bold>{newItem.sender_bank+" -> "+newItem.beneficiary_bank}</TextCustom>
                        <TextCustom semibold>{newItem.beneficiary_name}</TextCustom>
                        <TextCustom>{newItem.amount}<TextCustom bold h4>{" . "}</TextCustom>{newItem.created_at}</TextCustom>
                    </View>
                    <View style={{...styles.rightContent}}>
                        <InfoText status={newItem.status} />
                    </View>
                </View>
            </SideLineCardView>
        );
    }

    const convertBankCase = (string) => {
        return string.length < 4 ? string.toUpperCase() : string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getDate = (dateString) => {
        let day, month, year;
        let result = dateString.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{4}");
        if(null != result) {
            dateSplitted = result[0].split(result[1]);
            day = dateSplitted[0];
            month = dateSplitted[1];
            year = dateSplitted[2];
        }
        result = dateString.match("[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}");
        if(null != result) {
            dateSplitted = result[0].split(result[1]);
            day = dateSplitted[2];
            month = dateSplitted[1];
            year = dateSplitted[0];
        }

        if(month>12) {
            aux = day;
            day = month;
            month = aux;
        }

        month = getMonthId(month);

        return day+" "+month+" "+year;
    }

    return (
        <FlatList 
            data={data}
            renderItem={TransactionItem}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default TransactionList;