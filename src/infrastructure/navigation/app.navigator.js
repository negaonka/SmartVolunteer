import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import DonateScreen from "../../features/donate/screens/donate.screen";
import { EventsScreen } from "../../features/events/screens/events.screen";
import CoinsScreen from "../../features/coins/screens/coins.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EventsNavigator } from "./events.navigator";
import { MapsScreen } from "../../features/maps/screens/maps.screen";

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Donate") {
                iconName = (
                  <FontAwesome5
                    name="hand-holding-heart"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Event") {
                iconName = <Ionicons name="star" size={size} color={color} />;
              } else if (route.name === "Coins") {
                iconName = (
                  <FontAwesome5 name="coins" size={size} color={color} />
                );
              } else if (route.name === "Maps") {
                iconName = (
                  <FontAwesome name="map-marker" size={size} color={color} />
                );
              }
              return iconName;
            },
            tabBarActiveTintColor: "#007e9d",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            options={{
              headerShown: false, // change this to `false`
            }}
            name="Donate"
            component={DonateScreen}
          />
          <Tab.Screen
            options={{
              headerShown: false, // change this to `false`
            }}
            name="Event"
            component={EventsNavigator}
          />
          <Tab.Screen
            options={{
              headerShown: false, // change this to `false`
            }}
            name="Coins"
            component={CoinsScreen}
          />
          <Tab.Screen
            options={{
              headerShown: false, // change this to `false`
            }}
            name="Maps"
            component={MapsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
