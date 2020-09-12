import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ReduxPage from '../Screens/Redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ReduxPage></ReduxPage>;
  }
}

export default App;
