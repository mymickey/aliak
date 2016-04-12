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
  NativeModules
} = React;
var SCREEN_WIDTH = require('Dimensions').get('window').width;
var AK = require('@ali/AK');
var isAndriod = Platform.OS !='ios'
var {
    Router,
    SDK,
    Util,
    DA
  } = AK;

var Picker = React.createClass({
  onPickerConfirm:function  () {
    
    NativeModules.AKRCTPickerManager.getSelectedGroups(React.findNodeHandle(this._picker),function(opt){
        Alert.alert(
              '提示',
              JSON.stringify(opt),
              [
                {text:'取消'},
                {text: '确定', onPress: function(){}},
              ]
            );
    });
    
    DA.cmp.modal({
        hide:true
      });
  },
  onCancelPicker:function  () {
    DA.cmp.modal({
      hide:true
    })
  },
  renderDataPicker:function  () {
    var self = this;
    var nowDate = new Date()
    var nowHours =  nowDate.getHours();
    var isMorning = nowHours <= 11; 
    var arr = [[{label:'上午',value:'morning',selected:isMorning},{label:'下午',value:'after',selected:!isMorning}],[],[]];
    var huors = '时'
    var minus = '分'
    var selectedHours = nowHours - 11;

    for (var i = 0; i < 12; i++) {
      arr[1].push({
        label:i+huors,
        value:i,
        selected:selectedHours == i
      })
    };
    for (var i = 0; i < 60; i++) {
      arr[2].push({
        label:i + minus,
        value:i,
        selected:i== 0
      })
    };
    
    return (<View style={styles.dataPickerCt}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {'设置烹饪开始时间'}
        </Text>
      </View>
      <View style={styles.tip}>
        <Text style={styles.tipText}>
          {'可预约基于当前时间必须小于等于当前时间一小时或者一小时以下,请结合产品自身功能进行设定.'}
        </Text>
      </View>
      <DA.cmp.Picker
        ref={function(cmp){
          //debugger;
          if (cmp) {
            self._picker = cmp.refs.akrnpicker
          };
          
        }}
        frame={{width:SCREEN_WIDTH,height:216,x:0,y:0}}
        style={{width:SCREEN_WIDTH}}
        groups={arr}
        groupWidth={80}
        onChange={this.onPickerChange}
      />
      
      <View style={styles.btnsCt}>
        <Btn   btnStyle={[styles.btn,{marginRight:8}]}  text={'取消'}  onPress={this.onCancelPicker}/> 
        <Btn   btnStyle={styles.btn}  text={'确定'}  
        onPress={self.onPickerConfirm}/>  
      </View> 
      
    </View>)
  },
	 onPress:function(){
     DA.cmp.modal({
      content:this.renderDataPicker(),
      hide:false
     })
   },
   render:function(){
    return (<Btn text='picker' onPress={this.onPress} />)
   } 
});
var styles = StyleSheet.create({
  btnsCt:{
    flexDirection:'row',
    backgroundColor:'white',
    height:50,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:8,
    paddingRight:8,
    flex:1
  },
  tip:{
    borderColor:'#f1e6be',
    borderWidth:1,
    backgroundColor:'#fdfaef',
    flex:1,
    //height:30,
    marginLeft:7,
    marginRight:7,
    paddingTop:7,
    paddingLeft:7,
    paddingBottom:7,
  },  
  tipText:{
    color:'#856a09',
    fontSize:12
  },
  title:{
    flex:1,
    height:30,
    paddingLeft:7,
    paddingTop:7,

  },
  titleText:{
    fontSize:13
  },

  btn:{
    flex:1
  },

  btnColor:{
    backgroundColor:'#00C7B2',
    borderColor:'#00C7B2'
  },
  dataPickerCt:{
    backgroundColor:'white',
    //height:216+50+30+30,
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    flexDirection:'column'
  }
})
module.exports = Picker;