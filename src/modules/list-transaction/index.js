import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import NavLC from '../../components/navigation-life-cycle';
import SearchBar from '../../components/ui/search-bar';
import { BACKGROUND_COLOR } from '../../constants/colors';
import { FindSorted } from '../../constants/enum/find-sorted';
import screens from '../../navigations/screens';
import TransactionList from './components/transaction-list';

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15
    }
});

class ListTransaction extends Component {

    state = {
        originalData: [],
        sortedData: []
    }

    componentDidMount() {
        this.didFocus = NavLC.onSetDidFocus(this.props.navigation, async () => {
            await this.fetchListTransaction();
        })
    }

    fetchListTransaction = async () => {
        try {
            let response = await fetch('https://nextar.flip.id/frontend-test');
            let json = await response.json();
            let arrOfData = Object.values(json);

            this.setState({
                originalData: arrOfData,
                sortedData: arrOfData
            })
        } catch (error) {
            console.error(error);
        }
    }

    componentWillUnmount() {
        if(this.didFocus) this.didFocus.remove();
    }

    onSortData = (sortType) => {
        let sortedData = this.state.sortedData;

        switch (sortType) {
            case FindSorted.A_TO_Z:
                sortedData = sortedData.sort((a, b) => a.beneficiary_name > b.beneficiary_name);
                this.setState({sortedData});
                break;
            case FindSorted.Z_TO_A:
                sortedData = sortedData.sort((a, b) => a.beneficiary_name < b.beneficiary_name);
                this.setState({sortedData});
            case FindSorted.BY_NEW_DATE:
                sortedData = sortedData.sort((a, b) => a.created_at < b.created_at);
                this.setState({sortedData});
                break;
            case FindSorted.BY_OLD_DATE:
                sortedData = sortedData.sort((a, b) => a.created_at > b.created_at);
                this.setState({sortedData});
            default:
                break;
        }
    }

    onFindByText = (text) => {
        let sortedData = this.state.originalData.filter(it => it.beneficiary_name.toLowerCase().includes(text));
        this.setState({sortedData});
    }

    onSelectTransaction = (data) => {
        this.props.navigation.navigate(screens.DETAIL_TRANSACTION, {
            transactionDetail: data
        })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{...styles.container}}>
                    <SearchBar 
                        onFindByText={this.onFindByText} 
                        onSortBy={this.onSortData} />
                    <TransactionList data={this.state.sortedData} onSelectTransaction={this.onSelectTransaction} />
                </View>
            </TouchableWithoutFeedback>
        )
    }

}


export default ListTransaction;