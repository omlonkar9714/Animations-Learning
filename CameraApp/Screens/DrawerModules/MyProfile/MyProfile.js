import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';
class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    console.log('profile');
    this.getData();
  }

  getData = () => {
    this.setState({loading: true});
    console.log('Getting DAta');
    Axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => {
        this.setState({data: response.data}, () => {
          setTimeout(() => {
            this.setState({loading: false});
          }, 2000);
        });
        console.log('RESPONSE :' + JSON.stringify(response.data[0]));
      })
      .catch((error) => {
        console.log('ERROR :' + error);
      });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.loading == true && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator color="orange"></ActivityIndicator>
            <Text>Loading Data</Text>
          </View>
        )}
        {this.state.loading == false && this.state.data.length > 0 && (
          <View style={{margin: 20}}>
            <FlatList
              refreshControl={
                <RefreshControl
                  colors={['#9Bd35A', '#689F38']}
                  refreshing={this.state.loading}
                  onRefresh={() => {
                    this.getData();
                  }}
                />
              }
              data={this.state.data}
              renderItem={({item, index}) => (
                <View
                  style={{
                    padding: 10,
                    marginVertical: 10,
                    backgroundColor: 'red',
                  }}>
                  <Text>{item.id}</Text>
                  <Text>{item.title}</Text>
                </View>
              )}></FlatList>
          </View>
        )}
      </View>
    );
  }
}

export default MyProfile;
