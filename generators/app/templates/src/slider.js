'use strict';
var React = require('react-native');
var Btn = require('./Button')

var {
  AppRegistry,
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  ScrollView,
} = React;
var AK = require('@ali/AK');
var {
    Router,
    SDK,
    Util,
    DA
  } = AK;
var Slider = DA.cmp.Slider;
var NavTip = React.createClass({
	 onPress:function(){
     DA.cmp.navTip({
      duration:2000,
      content:'toastText',
      isVisible:true
     })
   },
   render:function(){
    return (<View style={{paddingLeft:20,paddingRight:20}}>
            <Text >{'色彩'}</Text>
            <Slider ref='slider2'

                  min= {0}
            max= {100}
            name= {"烧色"}
            showTick= {true}
            step= {50}
            value={50}

                  stepDescription={['低','中','高']}  />
          </View>)
   } 
});

module.exports = NavTip;