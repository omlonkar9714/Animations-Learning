import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  BackHandler,
  TextInput,
  ToastAndroid,
  Image,
  ImageBackground,
} from 'react-native';
import Header from '../../../components/GradientHeader';
// import {TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const GradientColors = [
  '#ff0000',
  '#f638dc',
  '#5454c5',
  '#ffd700',
  '#ff7844',
  '#5f85db',
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.flatList = createRef();
    this.onViewableItemsChanged.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      currentSlide: 0,
      LandscapeImages: [
        {
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDrln0QjAJOL9VMYWr96u_ESF7FM44eS7LpQ&usqp=CAU',
        },
        {
          key: Math.random(),
          image:
            'data:image/jpeg;base64,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',
        },

        {
          key: Math.random(),
          image:
            'https://img1.goodfon.com/wallpaper/nbig/7/5d/patagonia-landscape-panoramic.jpg',
        },
        {
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_EuM6IF6_ST9ntL1X0rceWNG-E-dASAQKxQ&usqp=CAU',
        },
        {
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjHYt3KVbEh0FYq6MgZA1ooWqKFQUw5fGEIw&usqp=CAU',
        },

        {
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTarXz4ZXghB6_s9-ICCmd84CtbtiAMyGn1ag&usqp=CAU',
        },
        {
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOQC0rm4oULdluZh3XURDeO6lZe5DChk1Ifw&usqp=CAU',
        },
        {
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQXQMyTTYl88gn8pvsJbAI_HPmcm9AT8BGuQ&usqp=CAU',
        },

        {
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQXQMyTTYl88gn8pvsJbAI_HPmcm9AT8BGuQ&usqp=CAU',
        },
      ],
      CategoryImages: [
        {
          name: 'Photography',
          key: Math.random(),
          image:
            'https://www.befunky.com/images/wp/wp-2016-03-blur-background-featured-1.jpg?auto=webp&format=jpg&width=880',
        },
        {
          name: 'Lenses',
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe1v-tOE_04as7Ii7OIomFzH1-h9vtPbuVow&usqp=CAU',
        },

        {
          name: 'Tripods',
          key: Math.random(),
          image:
            'https://image.freepik.com/free-photo/professional-camera-tripod-modern-photo-studio_23-2148038872.jpg',
        },
        {
          name: 'Stabilizer',
          key: Math.random(),
          image:
            'https://ae01.alicdn.com/kf/HTB1WI34OXzqK1RjSZFvq6AB7VXa1/Professional-new-2kg-load-capacity-SK02-3-Axis-Gimbal-Stabilizer-Handheld-Gimbal-Dual-handle-For-DSLR.jpg',
        },
        {
          name: 'Photography',
          key: Math.random(),
          image:
            'https://www.befunky.com/images/wp/wp-2016-03-blur-background-featured-1.jpg?auto=webp&format=jpg&width=880',
        },
        {
          name: 'Lenses',
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe1v-tOE_04as7Ii7OIomFzH1-h9vtPbuVow&usqp=CAU',
        },

        {
          name: 'Tripods',
          key: Math.random(),
          image:
            'https://image.freepik.com/free-photo/professional-camera-tripod-modern-photo-studio_23-2148038872.jpg',
        },
        {
          name: 'Stabilizer',
          key: Math.random(),
          image:
            'https://ae01.alicdn.com/kf/HTB1WI34OXzqK1RjSZFvq6AB7VXa1/Professional-new-2kg-load-capacity-SK02-3-Axis-Gimbal-Stabilizer-Handheld-Gimbal-Dual-handle-For-DSLR.jpg',
        },
      ],
      NewArrival: [
        {
          name: 'Mini Softbox',
          model: 'S.R.45',
          isFav: true,
          rating: 4,
          key: Math.random(),
          image:
            'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/08/24/Photos/Technology/z7-ksgF--621x414@LiveMint.PNG',
        },
        {
          name: 'Mini Softbox',
          model: 'S.R.45',
          isFav: false,
          rating: 4,
          key: Math.random(),
          image:
            'https://nikonrumors.com/wp-content/uploads/2012/03/Nikon-D4-DSLR-full-frame-camera.jpg',
        },
        {
          name: 'Mini Softbox',
          model: 'S.R.45',
          isFav: false,
          rating: 4,
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcS6fiLrrhuUS-Wo_XdM8XQ9n0XCLQ6DSz1w&usqp=CAU',
        },
        {
          name: 'Mini Softbox',
          model: 'S.R.45',
          isFav: false,
          rating: 4,
          key: Math.random(),
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNsIUseZdvWs5zp3VFPH9oZDQcUQCOPlwkDw&usqp=CAU',
        },
        {
          name: 'Mini Softbox',
          model: 'S.R.45',
          isFav: false,
          rating: 4,
          key: Math.random(),
          image:
            'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/08/24/Photos/Technology/z7-ksgF--621x414@LiveMint.PNG',
        },
        {
          name: 'Mini Softbox',
          model: 'S.R.45',
          isFav: false,
          rating: 4,
          key: Math.random(),
          image:
            'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/08/24/Photos/Technology/z7-ksgF--621x414@LiveMint.PNG',
        },
      ],
      FavsArray: [],
    };
  }

  onViewableItemsChanged = ({viewableItems, changed}) => {
    this.setState({currentSlide: viewableItems[0].index + 1});
  };

  componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
  }

  componentDidMount() {
    this.startScrolling();
    console.log('Home');
  }

  startScrolling = () => {};

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addToFav = (item) => {
    let Array = this.state.NewArrival;
    for (let i = 0; i < Array.length; i++) {
      if (Array[i].key == item.key) Array[i].isFav = !Array[i].isFav;
    }
    this.setState({NewArrival: Array});
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#e7e7e7'}}>
        <Header {...this.props}></Header>

        <View style={{flex: 1, marginHorizontal: hp('1.5%')}}>
          <View
            style={{
              marginBottom: hp('2%'),
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#ccc',
              elevation: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: hp('0.5%'),
              marginTop: hp('2%'),
            }}>
            <TextInput
              style={{flex: 1, fontSize: hp('1.8%'), marginLeft: hp('1.5%')}}
              placeholder="search"></TextInput>
            <FontAwesomeIcon
              onPress={() => {
                ToastAndroid.show('Searching', ToastAndroid.SHORT);
              }}
              style={{marginRight: hp('2%')}}
              name="search"
              size={hp('2.5%')}
              color="darkgrey"></FontAwesomeIcon>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.LandscapeImages.length > 0 && (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FlatList
                  ref={this.flatList}
                  pagingEnabled={true}
                  onViewableItemsChanged={this.onViewableItemsChanged}
                  style={{height: 150, width: 250}}
                  horizontal={true}
                  data={this.state.LandscapeImages}
                  renderItem={({item, index}) => (
                    <View>
                      <Image
                        style={{
                          height: 150,
                          width: 250,
                          resizeMode: 'cover',
                        }}
                        source={{
                          uri: item.image,
                        }}></Image>
                    </View>
                  )}></FlatList>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  {this.state.LandscapeImages.map((item, index) => (
                    <View
                      style={{
                        marginHorizontal: 5,
                        height: hp('1%'),
                        width: hp('1%'),
                        backgroundColor:
                          this.state.currentSlide == index + 1
                            ? 'orange'
                            : '#ccc',
                        borderRadius: 5,
                      }}></View>
                  ))}
                </View>
              </View>
            )}
            {this.state.CategoryImages.length > 0 && (
              <View
                style={{
                  // height: hp('15%'),

                  marginTop: hp('2%'),
                  // backgroundColor: 'grey',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                    Category
                  </Text>
                  <Text style={{fontSize: hp('1.5%')}}>
                    See all({this.state.CategoryImages.length})
                  </Text>
                </View>
                <FlatList
                  style={{marginTop: hp('2%')}}
                  horizontal={true}
                  data={this.state.CategoryImages}
                  renderItem={({item}) => (
                    <View
                      style={{
                        borderRadius: hp('2%'),
                        height: hp('12%'),
                        width: hp('12%'),
                        backgroundColor: 'red',
                        marginRight: hp('2%'),
                        overflow: 'hidden',
                      }}>
                      <ImageBackground
                        ref={(r) => (this.image = r)}
                        style={{flex: 1, resizeMode: 'cover'}}
                        source={{uri: item.image}}>
                        <LinearGradient
                          // ref={(r) => (this.gradiant = r)}
                          locations={[0, 1.0]}
                          // colors={['red', 'blue']}
                          colors={[
                            this.getRandomColor(),
                            this.getRandomColor(),
                          ]}
                          style={{
                            opacity: 0.6,
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                          }}></LinearGradient>
                      </ImageBackground>

                      <View
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            alignSelf: 'center',
                            color: 'white',
                            fontSize: hp('1.8%'),
                            fontWeight: 'bold',
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  )}></FlatList>
              </View>
            )}

            {this.state.NewArrival.length > 0 && (
              <View
                style={{
                  // height: hp('15%'),
                  marginTop: hp('2%'),
                  // backgroundColor: 'grey',
                  marginBottom: hp('5%'),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                    New Arrivall
                  </Text>
                  <Text style={{fontSize: hp('1.5%')}}>
                    See all({this.state.NewArrival.length})
                  </Text>
                </View>
                <FlatList
                  style={{marginTop: hp('2%')}}
                  horizontal={true}
                  data={this.state.NewArrival}
                  renderItem={({item}) => (
                    <View
                      style={{
                        borderRadius: hp('1%'),
                        // elevation: 1,
                        borderColor: '#ccc',
                        borderWidth: hp('0.1%'),
                        backgroundColor: 'white',
                        padding: hp('1%'),
                        marginRight: hp('2%'),
                        overflow: 'hidden',
                      }}>
                      <Image
                        style={{
                          height: hp('17%'),
                          width: hp('25%'),
                          borderRadius: hp('2%'),
                          resizeMode: 'cover',
                        }}
                        source={{uri: item.image}}></Image>
                      <View
                        style={{
                          position: 'relative',

                          left: -hp('6%'),
                          bottom: hp('3%'),
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            alignSelf: 'center',
                            color: 'orange',
                            fontSize: hp('1.8%'),
                            fontWeight: 'bold',
                          }}>
                          ★ ★ ★ ★ ★
                        </Text>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          right: hp('2%'),
                          top: hp('1.5%'),
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {/* <Text
                          style={{
                            alignSelf: 'center',
                            color: 'white',
                            fontSize: hp('3%'),
                            fontWeight: 'bold',
                          }}>
                          ♡❤
                        </Text> */}
                        <FontAwesomeIcon
                          onPress={() => {
                            // alert(item.key);
                            this.addToFav(item);
                          }}
                          name={item.isFav ? 'heart' : 'heart-o'}
                          size={hp('3%')}
                          color={
                            item.isFav ? 'red' : 'white'
                          }></FontAwesomeIcon>
                      </View>
                      <View
                        style={{
                          marginTop: hp('1%'),
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: hp('1.8%'),
                            fontWeight: 'bold',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color: 'orange',
                            fontSize: hp('1.8%'),
                            fontWeight: 'bold',
                          }}>
                          {item.model}
                        </Text>
                      </View>
                      <View
                        style={{
                          marginTop: hp('1%'),
                          height: hp('5%'),
                          borderRadius: hp('1%'),
                          width: '100%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'orange',
                        }}>
                        <Text
                          style={{
                            alignSelf: 'center',
                            color: 'black',
                            fontSize: hp('1.8%'),
                            fontWeight: 'bold',
                          }}>
                          Add to Cart
                        </Text>
                      </View>
                    </View>
                  )}></FlatList>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;
