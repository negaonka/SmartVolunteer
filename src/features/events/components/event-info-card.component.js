import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const EventCard = styled(Card)`
  background-color: #3895d3;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const EventCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.tertiary};
`;

const Date = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.tertiary};
`;

const Rewards = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.tertiary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const EventInfoCard = ({ event = {} }) => {
  const {
    eventTitle = "Garbage collection",
    location = "Edgbaston",
    rewards = "200 coins",
    numberOfVolunteers = "10",
    urgentVolunteer = "Yes",
    eventReferenceNo = "EV789078",
    dateOfEvent = "07 March,2023",
    contactDetails = [
      {
        contact1: "70000003450",
        contact2: "711111397111",
      },
    ],
    duration = "4 hours",
    eventDescription = "In garbage collection event, users need to pick all the garbage from the Edgbaston resorviour area",
    eventPhoto = "https://thumbs.dreamstime.com/z/young-people-volunteer-as-garbage-collectors-environmental-action-collect-help-133439589.jpg",
  } = event;
  return (
    <>
      <EventCard elevation={5}>
        <View>
          <EventCardCover key={eventTitle} source={{ uri: eventPhoto }} />
        </View>
        <Info>
          <Title>{eventTitle}</Title>
          <Date>{dateOfEvent}</Date>
          {/* <Rewards>{rewards}</Rewards>*/}
        </Info>
      </EventCard>
    </>
  );
};
