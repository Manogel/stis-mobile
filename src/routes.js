import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Main,
      },
      {
        initialRouteName: userLogged ? 'Main' : 'Main',
      }
    )
  );

export default Routes;
