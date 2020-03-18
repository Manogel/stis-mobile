import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import About from '~/pages/About';
import Detail from '~/pages/Detail';
import Main from '~/pages/Main';
import ResultsSearch from '~/pages/ResultsSearch';
import WelcomeScreen1 from '~/pages/Welcome/Screen1';
import WelcomeScreen2 from '~/pages/Welcome/Screen2';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Home: createStackNavigator(
          {
            Main,
            ResultsSearch,
            Detail,
            About,
          },
          {
            defaultNavigationOptions: {
              header: () => null,
            },
          }
        ),
        WelcomeScreen1,
        WelcomeScreen2,
      },
      {
        // initialRouteName: userLogged ? 'Main' : 'Main',
      }
    )
  );

export default Routes;
