import { createStackNavigator } from "@react-navigation/stack";
import { DonateScreen } from "../../features/donate/screens/donate.screen";
import { PaymentScreen } from "../../features/donate/screens/payment.screen";

const DonateStack = createStackNavigator();

export const DonateNavigator = () => {
  return (
    <DonateStack.Navigator
      headerMode="none"
      // in IOS we do a lower/upper slide
    >
      <DonateStack.Screen
        name="DonateScreen"
        component={DonateScreen}
        headerMode="none"
      />
      <DonateStack.Screen name="PaymentScreen" component={PaymentScreen} />
    </DonateStack.Navigator>
  );
};
