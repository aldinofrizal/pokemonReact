import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Detail from './views/Detail'
import Home from './views/Home'

const RouteConfigs = {
    Home : {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title : 'Home'
        })
    },
    Detail: {
        screen: Detail,
        navigationOptions: ({ navigation }) => ({
            title : navigation.state.params.item.name
        })
    },
}

const StackNavigatorConfig = {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#379191',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }

const stackNav = createStackNavigator(RouteConfigs, StackNavigatorConfig);
export default createAppContainer(stackNav)



