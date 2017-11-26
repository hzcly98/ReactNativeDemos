/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// 方法一：
// class ListItem extends Component<{}> {
//    render() {
//      return (
//        <View style={styles.list_item}>
//          <Text style={styles.list_item_font} onPress={this.show.bind(this,this.props.title)}>{this.props.title} onpress</Text>
//        </View>
//      );
//    }
//    show(msg){
//      alert(msg)
//    }
//  }

// 方法二：
class List extends Component<{}> {
   show(title) {
     alert(title);
   }
   render() {
     var news1 = [];
     for(var i in this.props.newsArr){
       var text = (
         <View key={i} style={styles.list_item}>
           <Text
             onPress={this.show.bind(this, this.props.newsArr[i])}
             numberOfLines={1}
             style={styles.list_item_font}>
             {this.props.newsArr[i]}
           </Text>
         </View>
       );
       news1.push(text);
     }
     return (
       <View style={styles.flex}>
         {news1}
       </View>
     );
   }
 }


export default class App extends Component<{}> {
  render() {
    // 方法一：
    // return (
    //   <View style={styles.flex,{marginTop:35}}>
    //    <ListItem title='Swift - 滑块（UISlider）的用法'></ListItem>
    //    <ListItem title='Swift - 告警框（UIAlertView）的用法'></ListItem>
    //    <ListItem title='Swift - 选择框（UIPickerView）的用法'></ListItem>
    //    <ListItem title='Swift - 操作表（UIActionSheet）的用法'></ListItem>
    //    <ListItem title='Swift - 滚动视图（UIScrollView）的用法'></ListItem>
    //    <ListItem title='O(∩_∩)O哈哈~'></ListItem>
    // </View>
    // );


    // 方法二：
    var newsData = [
     'Swift - 滑块（UISlider）的用法',
     'Swift - 告警框（UIAlertView）的用法',
     'Swift - 选择框（UIPickerView）的用法',
     'Swift - 操作表（UIActionSheet）的用法',
     'Swift - 滚动视图（UIScrollView）的用法'
    ];
    return (
      <View style={styles.flex,{marginTop:35}}>
        <List newsArr={newsData}></List>
      </View>
    );
  }
}



const styles = StyleSheet.create({

  flex:{
     flex:1
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font:{
    fontSize:16
  },
});
