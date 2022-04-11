import { useContext } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Card, Colors, Searchbar } from "react-native-paper";
import * as React from "react";
import { EventInfoCard } from "../components/event-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { EventsContext } from "../../../services/events/events.context";
import { Search } from "../components/search.component";

const EventsListContainer = styled(View)`
  padding: ${(props) => props.theme.space[4]};
`;

const Title = styled(Text)`
  color: grey;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-top: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
`;

export const EventsScreen = ({ navigation }) => {
  const { isLoading, events } = useContext(EventsContext);
  return (
    <SafeArea>
      {isLoading && (
        /*to see the events are loading*/
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color={Colors.blue300}
          />
        </View>
      )}
      <Search />
      {/*    <Title>Volunteers needed: Urgently</Title>*/}
      <FlatList
        data={events}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("EventDetail", {
                  event: item,
                })
              }
            >
              <EventInfoCard event={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16, marginTop: 16 }}
      />
    </SafeArea>
  );
};
