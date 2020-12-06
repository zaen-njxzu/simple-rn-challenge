import { createStackNavigator } from "react-navigation-stack";
import DetailTransaction from "../../modules/detail-transaction";
import ListTransaction from "../../modules/list-transaction";
import screens from "../screens";

export default createStackNavigator({
  [screens.LIST_TRANSACTION]: {
    screen: ListTransaction,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  [screens.DETAIL_TRANSACTION]: {
    screen: DetailTransaction,
    navigationOptions: () => ({
      headerShown: false
    })
  },
},
  {
    headerBackTitleVisible: true,
    initialRouteName: screens.LIST_TRANSACTION
  })
