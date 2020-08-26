import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';

class CircularAnimation extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      animation: new Animated.Value(0),
      animation15: new Animated.Value(0),
      animation2: new Animated.Value(0),
      animation25: new Animated.Value(0),
      animation3: new Animated.Value(0),
      animation35: new Animated.Value(0),
      animation4: new Animated.Value(0),
      animation45: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    this.startBall1();
    setTimeout(() => {
      this.startBall15();
      setTimeout(() => {
        this.startBall2();
        setTimeout(() => {
          this.startBall25();
          setTimeout(() => {
            this.startBall3();
            setTimeout(() => {
              this.startBall35();
              setTimeout(() => {
                this.startBall4();
                setTimeout(() => {
                  this.startBall45();
                }, 143);
              }, 143);
            }, 143);
          }, 143);
        }, 143);
      }, 143);
    }, 143);
  };

  startBall1 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation, {
          toValue: 370,
          duration: 1000,
        }),
        Animated.timing(this.state.animation, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  };
  startBall15 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation15, {
          toValue: 370,
          duration: 1000,
        }),
        Animated.timing(this.state.animation15, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  };
  startBall2 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation2, {
          toValue: 370,
          duration: 1000,
        }),
        Animated.timing(this.state.animation2, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  };
  startBall25 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation25, {
          toValue: 370,
          duration: 1000,
        }),
        Animated.timing(this.state.animation25, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  };
  startBall3 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation3, {
          toValue: 370,
          duration: 1000,
        }),
        Animated.timing(this.state.animation3, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  };
  startBall35 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation35, {
          toValue: 370,
          duration: 1000,
        }),
        Animated.timing(this.state.animation35, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  };
  startBall4 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation4, {
          toValue: 370,
          duration: 1000,
        }),
        Animated.timing(this.state.animation4, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  };
  startBall45 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation45, {
          toValue: 370,
          duration: 1000,
        }),
        Animated.timing(this.state.animation45, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          {/* //ball1 */}
          <View
            style={[
              {height: '100%', width: 1, backgroundColor: '#ccc'},
              {position: 'absolute', top: 0, alignSelf: 'center'},
            ]}></View>
          <Animated.View
            style={[
              styles.ball,
              {
                position: 'absolute',
                top: 0,
                alignSelf: 'center',
                translateY: this.state.animation,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Text style={{color: 'white'}}>1</Text>
          </Animated.View>
          {/* //ball 1.5 */}
          <Animated.View
            style={{top: 125, left: 185, transform: [{rotate: '67.2deg'}]}}>
            <View
              style={[
                {height: 1, width: '100%', backgroundColor: '#ccc'},
                {position: 'absolute', top: 200, alignSelf: 'center'},
              ]}></View>

            <Animated.View
              style={[
                styles.ball,
                {
                  position: 'absolute',
                  top: 190,
                  left: 0,
                  alignSelf: 'center',
                  translateX: this.state.animation15,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={{color: 'white'}}>1.5</Text>
            </Animated.View>
          </Animated.View>

          {/* //ball2 */}
          <Animated.View
            style={{top: 58, left: 142, transform: [{rotate: '45deg'}]}}>
            <View
              style={[
                {height: 1, width: '100%', backgroundColor: '#ccc'},
                {position: 'absolute', top: 200, alignSelf: 'center'},
              ]}></View>

            <Animated.View
              style={[
                styles.ball,
                {
                  position: 'absolute',
                  top: 190,
                  left: 0,
                  alignSelf: 'center',
                  translateX: this.state.animation2,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={{color: 'white'}}>2</Text>
            </Animated.View>
          </Animated.View>

          {/* //ball2.5 */}
          <Animated.View
            style={{top: 13, left: 78, transform: [{rotate: '22.5deg'}]}}>
            <View
              style={[
                {height: 1, width: '100%', backgroundColor: '#ccc'},
                {position: 'absolute', top: 200, alignSelf: 'center'},
              ]}></View>

            <Animated.View
              style={[
                styles.ball,
                {
                  position: 'absolute',
                  top: 190,
                  left: 0,
                  alignSelf: 'center',
                  translateX: this.state.animation25,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={{color: 'white'}}>2.5</Text>
            </Animated.View>
          </Animated.View>

          {/* //ball3 */}
          <View>
            <View
              style={[
                {height: 1, width: '100%', backgroundColor: '#ccc'},
                {position: 'absolute', top: 200, alignSelf: 'center'},
              ]}></View>

            <Animated.View
              style={[
                styles.ball,
                {
                  position: 'absolute',
                  top: 190,
                  left: 0,
                  alignSelf: 'center',
                  translateX: this.state.animation3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={{color: 'white'}}>3</Text>
            </Animated.View>
          </View>
          {/* //ball3.5 */}
          <Animated.View
            style={{top: 15, right: 75, transform: [{rotate: '337.5deg'}]}}>
            <View
              style={[
                {height: 1, width: '100%', backgroundColor: '#ccc'},
                {position: 'absolute', top: 200, alignSelf: 'center'},
              ]}></View>

            <Animated.View
              style={[
                styles.ball,
                {
                  position: 'absolute',
                  top: 190,
                  left: 0,
                  alignSelf: 'center',
                  translateX: this.state.animation35,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={{color: 'white'}}>3.5</Text>
            </Animated.View>
          </Animated.View>

          {/* //ball4 */}
          <Animated.View
            style={{top: 58, right: 142, transform: [{rotate: '315deg'}]}}>
            <View
              style={[
                {height: 1, width: '100%', backgroundColor: '#ccc'},
                {position: 'absolute', top: 200, alignSelf: 'center'},
              ]}></View>

            <Animated.View
              style={[
                styles.ball,
                {
                  position: 'absolute',
                  top: 190,
                  left: 0,
                  alignSelf: 'center',
                  translateX: this.state.animation4,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={{color: 'white'}}>4</Text>
            </Animated.View>
          </Animated.View>
          {/* //ball4.5 */}
          <Animated.View
            style={{top: 122, right: 185, transform: [{rotate: '292.5deg'}]}}>
            <View
              style={[
                {height: 1, width: '100%', backgroundColor: '#ccc'},
                {position: 'absolute', top: 200, alignSelf: 'center'},
              ]}></View>

            <Animated.View
              style={[
                styles.ball,
                {
                  position: 'absolute',
                  top: 190,
                  left: 0,
                  alignSelf: 'center',
                  translateX: this.state.animation45,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={{color: 'white'}}>4.5</Text>
            </Animated.View>
          </Animated.View>
        </View>

        <Pressable
          onPress={() => {
            this.startAnimation();
          }}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Start</Text>
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 20,
    width: 20,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  btnText: {fontSize: 35, color: 'white'},
  button: {
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: 'black',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  circle: {
    height: 400,
    width: 400,
    backgroundColor: 'white',
    borderRadius: 200,
    // overflow:''
  },
});

export default CircularAnimation;
