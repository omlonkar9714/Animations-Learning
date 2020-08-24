import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Pressable} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1),
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {toValue: 3, duration: 500}).start();
  };

  render() {
    const animatedStyles = {
      transform: [
        {
          scale: this.state.animation,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            this.startAnimation();
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
