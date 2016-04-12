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
        buttons:[{text:['编辑','完成'],name:'edit'},{iconfont:currentIconCode,name:'icon'}],
        title:'title2'
      }
  },
  getInitialState() {
      return {
          btnName:null
      };
  },
  disableRightBtnByName:function(){
    var navbar = this.props.getNavbarView(this);
    navbar.disableRightBtnByName('edit',!isDisableRightBtnByName)
    isDisableRightBtnByName = !isDisableRightBtnByName;
  },
  removeIconfont:function(){
    var navbar = this.props.getNavbarView(this);
    navbar.setButtons([{text:['编辑','完成'],name:'edit'}])
  },
  didChangeNavIconfont:function(){
    var navbar = this.props.getNavbarView(this);
    currentIconCode = iconCode1 == currentIconCode ? iconCode2 : iconCode1;
    navbar.setButtons([{text:['编辑','完成'],name:'edit'},{iconfont:currentIconCode,name:'icon'}])
  },
  render:function(){
    return (<View style={styles.container}>
        <Text>{'参数传递:'}{this.props.args}</Text>
        <Btn text="修改iconfont" onPress={this.didChangeNavIconfont} />
        <Btn text="禁用导航编辑按钮" onPress={this.disableRightBtnByName} />
        <Btn text="移除icon" onPress={this.removeIconfont} />
        {
          this.state.btnName?
          <Text>{'温馨提示 你点击了:'+this.state.btnName}</Text>:null
        }
      </View>)
  },
  onNavBtnPress:function   (nav,btnName,route) {
      if (btnName == 'back') {
        Alert.alert(
          '提示',
          '您确认返回吗?',
          [
            {text: '取消'},
            {text: '确认', onPress: () => DA.getRouter().pop()},
          ]
        )
      }else{
        this.setState({
          btnName:btnName
        })
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
    return (<Btn text='push' onPress={this.onPress} />)
   } 
});
var styles = StyleSheet.create({
    
    container: {
        paddingTop:64,
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
});
module.exports = Push;