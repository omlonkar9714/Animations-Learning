import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Pressable} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1),
      height: new Animated.Value(0),
    };
  }

  startAnimationOpacity = () => {
    console.log('starting opacity animation');
    Animated.timing(this.state.animation, {
      duration: 1000,
      useNativeDriver: true,
      toValue: 0,
    }).start(() => {
      console.log('completed');
    });
  };

  startAnimationHeight = () => {
    console.log('starting height animation');
    Animated.timing(this.state.height, {
      duration: 1000,
      useNativeDriver: true,
      toValue: 300,
    }).start(() => {
      console.log('completed');
      this.startAnimationHeight2();
      this.startAnimationOpacity2();
    });
  };

  startAnimationOpacity2 = () => {
    console.log('starting opacity animation');
    Animated.timing(this.state.animation, {
      duration: 1000,
      useNativeDriver: true,
      toValue: 1,
    }).start(() => {
      console.log('completed');
    });
  };

  startAnimationHeight2 = () => {
    console.log('starting height animation');
    Animated.timing(this.state.height, {
      duration: 1000,
      useNativeDriver: true,
      toValue: 0,
    }).start(() => {
      console.log('completed');
    });
  };

  render() {
    const animatedStyles = {
      opacity: this.state.animation,
      transform: [{translateY: this.state.height}],
    };
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            this.startAnimationOpacity();
            this.startAnimationHeight();
          }}>
          <Animated.View style={[styles.box, animatedStyles]}></Animated.View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  box: {height: 100, width: 100, backgroundColor: 'tomato'},
});

export default App;
