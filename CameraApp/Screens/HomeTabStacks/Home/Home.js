import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Drawer from '../../../Navigation/DrawerNavigator';
import Header from '../../../components/GradientHeader';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Drawer></Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default Home;
