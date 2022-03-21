import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { EventsScreen } from "./src/features/events/screens/events.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import DonateScreen from "./src/features/donate/screens/donate.screen";
import CoinsScreen from "./src/features/coins/screens/coins.screen";
import { EventsContextProvider } from "./src/services/events/events.context";

export default function App() {
  const Tab = createBottomTabNavigator();
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <EventsContextProvider>
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
                  } else if (route.name === "Events") {
                    iconName = (
                      <Ionicons name="star" size={size} color={color} />
                    );
                  } else if (route.name === "Coins") {
                    iconName = (
                      <FontAwesome5 name="coins" size={size} color={color} />
                    );
                  }
                  return iconName;
                },
                tabBarActiveTintColor: "#007e9d",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Donate" component={DonateScreen} />
              <Tab.Screen name="Events" component={EventsScreen} />
              <Tab.Screen name="Coins" component={CoinsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </EventsContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

/*import React from "react";*/
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
} from "react-native";
/*
export default function App() {
  let [quote, setQuote] = React.useState("");
  let [source, setSource] = React.useState("");
  const fetchApiCall = () => {
    fetch("http://localhost:5000/api/event", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Native API Calls</Text>
      <Text>Example with fetch and Axios</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Fetch API</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Text>{quote}</Text>
        <Text>{source}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAA",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  title: {
    fontSize: 35,
    color: "#fff",
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: "#0645AD",
  },
  buttonText: {
    color: "#fff",
  },
});
*/
