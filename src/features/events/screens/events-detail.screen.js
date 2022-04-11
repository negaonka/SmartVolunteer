import { SafeArea } from "../../../components/utility/safe-area.component";
import { EventInfoCard } from "../components/event-info-card.component";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { List } from "react-native-paper";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const EventsDetailScreen = ({ route }) => {
  const [eventDetailExpanded, setEventDetailExpanded] = useState(0);
  const { event } = route.params;
  const [coins, setCoins] = useState(0);

  const Title = styled(Text)`
    color: grey;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    padding: ${(props) => props.theme.space[2]};
  `;

  useEffect(() => {
    const retrieveCoins = async () => {
      try {
        const coins = await AsyncStorage.getItem("coins");
        if (coins === "null" || coins === null) {
          console.log("coins are null");
          setCoins(0);
        } else {
          console.log(coins);
          setCoins(JSON.parse(coins));
        }
      } catch (error) {
        console.log(error);
      }
    };
    retrieveCoins();
  }, [coins]);

  const addCoins = async (data) => {
    const totalCoins = parseInt({ coins }.coins) + parseInt(data.event.rewards);
    await AsyncStorage.setItem("coins", JSON.stringify(totalCoins));
    Alert.alert("Coins", data.event.rewards + " coins added", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <SafeArea>
      <EventInfoCard event={event} />
      <List.Accordion
        title="Event Details"
        left={(props) => <List.Icon {...props} icon="star" />}
        expanded={eventDetailExpanded}
        onPress={() => setEventDetailExpanded(!eventDetailExpanded)}
      >
        <View>
          <Title>{event.eventDescription}</Title>
          <Title>{event.location} </Title>
          <Title>{event.duration} </Title>
        </View>
      </List.Accordion>

      <View style={{ padding: 40, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => addCoins({ event })}
          style={{ backgroundColor: "#2182BD" }}
        >
          <Text style={{ color: "white", padding: 10 }}>Volunteer</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};
