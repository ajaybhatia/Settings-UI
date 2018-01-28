import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Navigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    }),
  },
});

export default Navigator;
