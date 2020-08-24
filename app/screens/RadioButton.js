import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Pressable} from 'react-native';

class RadioButton extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      animation: new Animated.Value(0),
      widthBall: 0,
      right: false,
      pressable: true,
      rightWidth: new Animated.Value(1),
    };
  }

  handleAnimation = () => {
    this.setState({pressable: false}, () => {
      this.setState({right: true});
      this.state.animation.addListener(({value}) => {
        this.setState({widthBall: parseInt(value, 10)});
      });
      Animated.timing(this.state.animation, {
        duration: 400,
        toValue: 107,
      }).start(() => {
        this.setState({pressable: true});
      });
    });
  };

  handleAnimationReverse = () => {
    this.setState({pressable: false}, () => {
      this.setState({right: false});
      this.state.animation.addListener(({value}) => {
        this.setState({widthBall: parseInt(value, 10)});
      });
      Animated.timing(this.state.animation, {
        duration: 400,
        toValue: 0,
      }).start(() => {
        this.setState({pressable: true});
      });
    });
  };

  render() {
    const animatedStyles = {transform: [{translateX: this.state.animation}]};
    const BackgroundColorConfig = this.state.animation.interpolate({
      inputRange: [0, 110],
      outputRange: ['red', 'green'],
    });
    return (
      <View style={styles.container}>
        <View style={styles.outer}>
          <Pressable
            disabled={!this.state.pressable}
            onPress={() => {
              if (this.state.right == false) {
                this.handleAnimation();
              } else {
                this.handleAnimationReverse();
              }
            }}>
            <Animated.View
              style={[
                styles.inner,
                {backgroundColor: BackgroundColorConfig},
              ]}></Animated.View>
            <Animated.View
              style={[
                styles.ball,
                animatedStyles,
                // {backgroundColor: this.state.right == true ? 'green' : 'red'},
              ]}></Animated.View>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inner: {
    height: '100%',
    // width: '100%',
    backgroundColor: 'purple',
    borderRadius: 35,
  },
  ball: {
    marginTop: -2,
    height: 74,
    width: 74,
    borderRadius: 37,
    backgroundColor: 'white',
    elevation: 15,
    position: 'absolute',
  },
  outer: {
    height: 90,
    padding: 10,
    borderRadius: 45,
    width: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 5,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default RadioButton;
