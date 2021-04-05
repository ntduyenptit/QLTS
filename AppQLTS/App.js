import { Dimensions } from 'react-native';
import Login from './components/Login';
import CustomSidebarMenu from "./components/DrawerMenu";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import ToanBoTaiSan from './components/quan-ly-tai-san/ToanBoTaiSan';

const { width } = Dimensions.get('window');

//---------------------------------------------------------------
const drawerRouteConfigs = {
    HomeScreen: {
        screen: ToanBoTaiSan,
    },
    SignIn: {
        screen: Login,
    }
};

const drawerNavigatorConfig = {
    initialRouteName: 'SignIn',
    drawerWidth: width / 1.5,
    drawerPosition: 'left',
    drawerBackgroundColor: "#aae1e6",
    contentComponent: CustomSidebarMenu,
    headerMode: 'screen',
    useNativeAnimations: 'true',
    contentOptions: {
        activeTintColor: 'red',

    },
};

const DrawerNavigator = createDrawerNavigator(drawerRouteConfigs, drawerNavigatorConfig);
//---------------------------------------------
const stackRouteConfigs = {
    DrawerNavigator: {
        screen: DrawerNavigator

    },
};

const stackNavigatorCofig = {
    initialRouteName: 'DrawerNavigator',
    headerMode: 'none'
};

const StackNavigator = createStackNavigator(stackRouteConfigs, stackNavigatorCofig);
//export default stackNavigator;
//----------------------

export default createAppContainer(StackNavigator);