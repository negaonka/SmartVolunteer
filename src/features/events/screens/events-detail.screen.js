import { SafeArea } from "../../../components/utility/safe-area.component";
import { EventInfoCard } from "../components/event-info-card.component";
import { Text, TouchableOpacity, View } from "react-native";
import { List } from "react-native-paper";
import { useState } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const EventsDetailScreen = ({ route }) => {
  const [eventDetailExpanded, setEventDetailExpanded] = useState(0);
  const [coins, setCoins] = useState(0);
  const { event } = route.params;

  const Title = styled(Text)`
    color: grey;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    padding: ${(props) => props.theme.space[2]};
  `;

  const addCoins = () => {
    setCoins(1000);
    AsyncStorage.setItem("coins", coins);
    console.log(AsyncStorage.getItem("coins"));
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
        <View style={{ flex: 1, flexWrap: "wrap" }}>
          <Title>{event.eventDescription}</Title>
          <Title> {event.rewards} </Title>
          <Title>{event.location} </Title>
          <Title>{event.duration} </Title>
        </View>
      </List.Accordion>

      <View style={{ padding: 40, alignItems: "center" }}>
        <TouchableOpacity
          onPress={addCoins}
          style={{ backgroundColor: "#2182BD" }}
        >
          <Text style={{ color: "white", padding: 10 }}>Volunteer</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};
