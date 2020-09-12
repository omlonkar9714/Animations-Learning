import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

let x = 9;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numstring: '',
      wordString: '',
    };
  }

  getSinglenumword = (number) => {
    if (number == 1) {
      return 'One';
    }
    if (number == 2) {
      return 'Two';
    }
    if (number == 3) {
      return 'Three';
    }
    if (number == 4) {
      return 'Four';
    }
    if (number == 5) {
      return 'Five';
    }
    if (number == 6) {
      return 'Six';
    }
    if (number == 7) {
      return 'Seven';
    }
    if (number == 8) {
      return 'Eight';
    }
    if (number == 9) {
      return 'Nine';
    }
  };

  convertToWord = (number) => {
    // alert(number);
    let numstring = number + '';
    // alert(numstring[0]);
    if (numstring.length == 1) {
      let word = this.getSinglenumword(number);
      this.setState({wordString: word});
    } else if (numstring.length == 2) {
      if (
        number == 10 ||
        number == 11 ||
        number == 12 ||
        number == 13 ||
        number == 14 ||
        number == 15 ||
        number == 16 ||
        number == 17 ||
        number == 18 ||
        number == 19 ||
        number == 20 ||
        number == 30 ||
        number == 40 ||
        number == 50 ||
        number == 60 ||
        number == 70 ||
        number == 80 ||
        number == 90
      ) {
        if (number == 10) {
          this.setState({wordString: 'Ten'});
        }
        if (number == 11) {
          this.setState({wordString: 'Eleven'});
        }
        if (number == 12) {
          this.setState({wordString: 'Twelve'});
        }
        if (number == 13) {
          this.setState({wordString: 'Thirteen'});
        }
        if (number == 14) {
          this.setState({wordString: 'Fourteen'});
        }
        if (number == 15) {
          this.setState({wordString: 'Fifteen'});
        }
        if (number == 16) {
          this.setState({wordString: 'Sixteen'});
        }
        if (number == 17) {
          this.setState({wordString: 'Seventeen'});
        }
        if (number == 18) {
          this.setState({wordString: 'Eighteen'});
        }
        if (number == 19) {
          this.setState({wordString: 'Nineteen'});
        }
        if (number == 20) {
          this.setState({wordString: 'Twenty'});
        }
        if (number == 30) {
          this.setState({wordString: 'Thirty'});
        }
        if (number == 40) {
          this.setState({wordString: 'Fourty'});
        }
        if (number == 50) {
          this.setState({wordString: 'Fifty'});
        }
        if (number == 60) {
          this.setState({wordString: 'Sixty'});
        }
        if (number == 70) {
          this.setState({wordString: 'Seventy'});
        }
        if (number == 80) {
          this.setState({wordString: 'Eighty'});
        }
        if (number == 90) {
          this.setState({wordString: 'Ninty'});
        }
      } else {
        let unit = this.getSinglenumword(parseInt(numstring[1]));
        if (numstring[0] == '2') {
          this.setState({wordString: 'Twenty ' + unit});
        }
        if (numstring[0] == '3') {
          this.setState({wordString: 'Thirty ' + unit});
        }
        if (numstring[0] == '4') {
          this.setState({wordString: 'Fourty ' + unit});
        }
        if (numstring[0] == '5') {
          this.setState({wordString: 'Fifty ' + unit});
        }
        if (numstring[0] == '6') {
          this.setState({wordString: 'Sixty ' + unit});
        }
        if (numstring[0] == '7') {
          this.setState({wordString: 'Seventy ' + unit});
        }
        if (numstring[0] == '8') {
          this.setState({wordString: 'Eighty ' + unit});
        }
        if (numstring[0] == '9') {
          this.setState({wordString: 'Ninety ' + unit});
        }
      }
    } else if (numstring.length == 3) {
      if (numstring == '100') {
        this.setState({wordString: 'Hundread'});
      } else {
        this.setState({wordString: ''});
      }
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{borderWidth: 1, width: '50%', paddingHorizontal: 20}}>
          <TextInput
            onChangeText={(text) => {
              this.setState({numstring: text}, () => {
                if (this.state.numstring.length > 0) {
                  this.convertToWord(parseInt(this.state.numstring));
                }
              });
            }}
            maxLength={3}
            placeholder="Enter number"
            keyboardType="number-pad"></TextInput>
        </View>
        <View
          style={{
            marginTop: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            Number entered :{' '}
            {this.state.numstring.length > 0
              ? parseInt(this.state.numstring)
              : ''}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            Convert
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            Number converted : {this.state.wordString}
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
