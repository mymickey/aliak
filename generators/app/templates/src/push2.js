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
var iconCode1 = '&#x7009'
var iconCode2 = '&#x7011'
var currentIconCode = iconCode1;
var isDisableRightBtnByName = false;
var Panel = React.createClass({
  statics:{
      navbarPassProps:{
        statusBarColor:'black',
        buttons:[{iconfont:currentIconCode,name:'icon'}],
        title:'title2',
        //transitionalTitle:true,//默认隐藏title 待拖动后才显示title
        barType:'transitional',
      }
  },
  getInitialState() {
      return {
          btnName:null
      };
  },
  disableRightBtnByName:function(){
    var navbar = this.props.getNavbarView(this);
    navbar.disableRightBtnByName('icon',!isDisableRightBtnByName)
    isDisableRightBtnByName = !isDisableRightBtnByName;
  },
  removeIconfont:function(){
    var navbar = this.props.getNavbarView(this);
    navbar.setButtons([])
  },
  didChangeNavIconfont:function(){
    var navbar = this.props.getNavbarView(this);
    currentIconCode = iconCode1 == currentIconCode ? iconCode2 : iconCode1;
    navbar.setButtons([{iconfont:currentIconCode,name:'icon'}])
  },
  _handleScroll:function (e) {
    var alpha = (e.nativeEvent.contentInset.top + e.nativeEvent.contentOffset.y) / 200;
    if (alpha < 0) alpha = 0;
    if (alpha > 1) alpha = 1;
    this.changeNavColor(alpha);
  },
  changeNavColor:function(alpha){
    console.log('alpha',alpha);
      var navbar = this.props.getNavbarView(this);
      navbar.setBarAlpha(alpha)
  },
  render:function(){
    return (<View style={styles.container}>
      <ScrollView scrollEventThrottle={16} automaticallyAdjustContentInsets={false} onScroll={this._handleScroll} style={styles.scrollView}>
      <View style={{flex:1,height:1000}}>
        <Text>请上拉视图</Text>
        <Btn text="修改iconfont" onPress={this.didChangeNavIconfont} />
        <Btn text="移除icon" onPress={this.removeIconfont} />
        {
          this.state.btnName?
          <Text>{'温馨提示 你点击了:'+this.state.btnName}</Text>:null
        }
      </View>  
      </ScrollView></View>)
  },
  onNavBtnPress:function   (nav,btnName,route) {
      if (btnName == 'back') {
        DA.getRouter().pop()
      }else if(Platform.OS =='ios'){
        var navbar = this.props.getNavbarView(this);
        var loadingIcon = DA.cmp.NarbarTransitional.loadingIcon;
        navbar.setButtons([{iconfont:loadingIcon,name:'loading'}]);
        setTimeout(function(){
          navbar.setButtons([{iconfont:iconCode2,name:'loading'}]);
        }, 3000);
      }
  }
})
var Push = React.createClass({
	 onPress:function(){
     DA.getRouter().push({
      component:Panel,
      passProps:{
        args:'hi'
      }
     })
   },
   render:function(){
    return (<Btn text='push2' onPress={this.onPress} />)
   } 
});
var styles = StyleSheet.create({
    scrollView:{
       paddingTop:64,
       // backgroundColor:'#999',
    },
    container: {

        flex: 1,
        
        
    }
});
module.exports = Push;