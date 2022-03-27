import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { EventsScreen } from "../../features/events/screens/events.screen";
import { EventsDetailScreen } from "../../features/events/screens/events-detail.screen";

const EventStack = createStackNavigator();

export const EventsNavigator = () => {
  return (
    <EventStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }} // in IOS we do a lower/upper slide
    >
      <EventStack.Screen
        name="Events"
        component={EventsScreen}
        headerMode="none"
      />
      <EventStack.Screen name="EventDetail" component={EventsDetailScreen} />
    </EventStack.Navigator>
  );
};
