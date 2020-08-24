import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  Pressable,
  ToastAndroid,
  StyleSheet,
  StatusBar,
} from 'react-native';

class WifiButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationBall1: new Animated.Value(0),
      animationBall2: new Animated.Value(0),
      animationBall3: new Animated.Value(0),
      animationBall4: new Animated.Value(0),
      stop: false,
      animatedheight: 0,
      started: false,
    };
  }

  startLoadingBall1 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animationBall1, {
          toValue: -50,
          duration: 500,
        }),
        Animated.timing(this.state.animationBall1, {
          toValue: 0,
          duration: 500,
        }),
      ]),
    ).start();
  };
  startLoadingBall2 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animationBall2, {
          toValue: -50,
          duration: 500,
        }),
        Animated.timing(this.state.animationBall2, {
          toValue: 0,
          duration: 500,
        }),
      ]),
    ).start();
  };
  startLoadingBall3 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animationBall3, {
          toValue: -50,
          duration: 500,
        }),
        Animated.timing(this.state.animationBall3, {
          toValue: 0,
          duration: 500,
        }),
      ]),
    ).start();
  };
  startLoadingBall4 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animationBall4, {
          toValue: -50,
          duration: 500,
        }),
        Animated.timing(this.state.animationBall4, {
          toValue: 0,
          duration: 500,
        }),
      ]),
    ).start();
  };

  componentDidMount() {
    console.disableYellowBox = true;
  }

  startLoadingAnimation = () => {
    this.startLoadingBall1();
    setTimeout(() => {
      this.startLoadingBall2();
      setTimeout(() => {
        this.startLoadingBall3();
        setTimeout(() => {
          this.startLoadingBall4();
        }, 250);
      }, 250);
    }, 250);
  };

  stoptLoadingAnimation = () => {
    Animated.timing(this.state.animationBall1, {
      toValue: 0,
      duration: 500,
    }).start();
    Animated.timing(this.state.animationBall2, {
      toValue: 0,
      duration: 500,
    }).start();
    Animated.timing(this.state.animationBall3, {
      toValue: 0,
      duration: 500,
    }).start();
    Animated.timing(this.state.animationBall4, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" hidden={true}></StatusBar>
        <View style={{flexDirection: 'row'}}>
          <Animated.View
            style={[
              styles.dot,
              {transform: [{translateY: this.state.animationBall1}]},
            ]}></Animated.View>
          <Animated.View
            style={[
              styles.dot,
              {transform: [{translateY: this.state.animationBall2}]},
            ]}></Animated.View>
          <Animated.View
            style={[
              styles.dot,
              {transform: [{translateY: this.state.animationBall3}]},
            ]}></Animated.View>
          <Animated.View
            style={[
              styles.dot,
              {transform: [{translateY: this.state.animationBall4}]},
            ]}></Animated.View>
        </View>

        <Pressable
          onPress={() => {
            this.startLoadingAnimation();
          }}>
          <View style={[styles.button]}>
            <Text style={{fontSize: 30}}>Start</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            this.stoptLoadingAnimation();
          }}>
          <View style={[styles.button, {marginTop: 20}]}>
            <Text style={{fontSize: 30}}>Stop</Text>
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dot: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'red',
    marginHorizontal: 10,
  },
  button: {
    marginTop: 50,
    backgroundColor: 'white',
    elevation: 5,
    paddingVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 50,
  },
});

export default WifiButton;
