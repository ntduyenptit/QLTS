import React, { Component, PropTypes  } from "react"

import {
  StyleSheet,
  View,
  FlatList,
} from "react-native"

import ProfileComponent from './ProfileComponent'
import DrawerItem from './DrawerItemComponent'

const userData = {
 // profileUrl: 'https://s-media-cache-ak0.pinimg.com/736x/a3/e3/d6/a3e3d67e30105ca1688565e484370ab8--social-networks-harry-potter.jpg',
  
  username: 'Admin',
  email: 'admin@mobifone.vn'
}


const menuData = [
  {icon: "ios-search", name:"Quản lý tài sản", screenName:"PiedPiper", key: 1},
  {icon: "ios-home-outline", name:"Quản lý đầu đọc", screenName:"PiedPiper", key: 2},
  {icon: "ios-chatboxes-outline", name:"Giám sát tài sản", screenName:"PiedPiper", key: 3},
  {icon: "ios-navigate-outline", name:"Quản lý kiểm kê", screenName:"Hooli", key: 4},
  {icon: "ios-heart-outline", name:"Quản lý dự trù mua sắm", screenName:"Hooli", key: 5},
  {icon: "ios-person-outline", name:"Quản lý cảnh báo", screenName:"Hooli", key: 6},
  {icon: "ios-settings-outline", name:"Báo cáo", screenName:"Hooli", key: 7},
  {icon: "ios-person-outline", name:"Quản lý danh mục", screenName:"Hooli", key: 8},
  {icon: "ios-settings-outline", name:"Quản lý hệ thống", screenName:"Hooli", key: 9},
]



class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileComponent profileUrl={userData.profileUrl} username={userData.username} email={userData.email} />
        <FlatList
          data={menuData}
          renderItem={({item}) => <DrawerItem navigation={this.props.navigation} screenName={item.screenName} icon={item.icon} name={item.name} key={item.key} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(255,255,255,0.43)'
  },
  menuItem: {
    flexDirection:'row'
  },
  menuItemText: {
    fontSize:15,
    fontWeight:'300',
    margin:15,
  }
})

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;
