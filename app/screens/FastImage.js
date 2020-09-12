import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ToastAndy,
  Pressable,
  ToastAndroid,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const ImagesArray = [
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
  {
    key: 'Android',
    image:
      'https://i.insider.com/525ac397ecad044e0bc07620?width=750&format=jpeg&auto=webp',
  },
  {
    key: 'iOS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQckdbW0n48_ElC9lXkgawvQWbu5SbBj7Jo8Q&usqp=CAU',
  },
  {
    key: 'Java',
    image:
      'https://i.pinimg.com/originals/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.png',
  },
  {
    key: 'Swift',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFt7NBxWXWNFNkk97p-27N78bqMNIsVGG4w&usqp=CAU',
  },
  {
    key: 'Php',
    image:
      'https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg',
  },
  {
    key: 'Hadoop',
    image:
      'https://www.logolynx.com/images/logolynx/fc/fc7e5d25fcf1df9ae31f32462159ef85.png',
  },
  {
    key: 'Sap',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ptWvna9gU5gR-ogzKo3gllEifK0MpUjRoQ&usqp=CAU',
  },
  {
    key: 'Python',
    image:
      'https://img.favpng.com/14/23/17/python-logo-png-favpng-zh3hwdBFc2eeM3WMWECcjqDK1.jpg',
  },
  {
    key: 'Ajax',
    image:
      'https://i.pinimg.com/originals/ff/22/9d/ff229dec4388e4669be34a8891434b60.png',
  },
  {key: 'C++', image: 'https://i.redd.it/31b2ii8hchi31.jpg'},
  {
    key: 'Ruby',
    image:
      'https://static.dribbble.com/users/1014829/screenshots/7990189/ruby_logo_redesign.png',
  },
  {key: 'Rails', image: 'https://avatars.githubusercontent.com/u/4223'},
  {
    key: '.Net',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png',
  },
  {
    key: 'Perl',
    image:
      'https://ih1.redbubble.net/image.627282267.5515/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
  },
];

class FastImage1 extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {};
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  //handling onPress action

  renderItem = (item, index) => {
    return (
      <Pressable
        onPress={() => {
          ToastAndroid.show(index + 1 + '', ToastAndroid.SHORT);
        }}>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            backgroundColor: '#e7e7e7',
          }}>
          <Text style={{fontSize: 10}}>{index + 1 + ' ' + item.key}</Text>
          <FastImage
            resizeMode="contain"
            source={{uri: item.image, priority: 'high'}}
            style={{
              height: 50,
              width: 50,
              aspectRatio: 1,
            }}></FastImage>
        </View>
      </Pressable>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => {
            item.key + Math.random();
          }}
          numColumns={6}
          data={ImagesArray}
          renderItem={({item, index}) => this.renderItem(item, index)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'lightgreen'},
});
export default FastImage1;
