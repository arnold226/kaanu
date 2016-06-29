'use strict'
// Press Cmd+R to reload
// Cmd+D or shake for dev menu

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Alert,
  View,
  ListView,
  Text
} from 'react-native';
import Realm from '../models/Realm'
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import ListItem from '../components/ListItem'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

// const addresses = [
//   {addressName: "My House", addressWords: "sankara.rue.douze", ownerPhone: "77898753"},
//   {addressName: "Airtel", addressWords: "nations.unies.airtel", ownerPhone: "50894532"}
// ]

const addresses = Realm.objects('Address');
// Realm.write(()=>{
//   Realm.delete(addresses);
// });

// Realm.write(()=>{
//   Realm.create('Address', {addressName: "Airtel", addressWords: "nations.unies.airtel", ownerPhone: "50894532"});
// });

class AddressListScreenWithoutCreate extends Component {
  constructor(props){
      super(props);
      var ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      });
      this.state = {
        addressDataSource: ds.cloneWithRows(addresses)
      };
  }

  render() {
    return (
        <ViewContainer>
         <StatusBar title="Addresses"/>
         <ListView
            dataSource={this.state.addressDataSource}
            renderRow={(address) => { return this.renderAddressView(address)}}
            style={styles.listView} />
           <ActionButton buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item buttonColor="rgba(231,76,60,1)"
                title="Aller a"
                onPress={() => {}}>
                <Text> Aller a </Text>
              </ActionButton.Item>
              <ActionButton.Item buttonColor="rgba(231,76,60,1)"
                title="Ajouter"
                onPress={() => {}} >
                <Text> Ajouter </Text>
              </ActionButton.Item>

           </ActionButton>
        </ViewContainer>
    );
  }

  renderAddressView(address){
      return(
        <ListItem data={address}/>
      );
  }


}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    marginTop: 20
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

module.exports = AddressListScreenWithoutCreate