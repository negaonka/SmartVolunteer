import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

const Title = styled(Text)`
  color: grey;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding-top: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
`;

const Coins = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[4]};
`;

const CoinsEarned = styled(View)`
  padding-left: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export default function CoinsScreen() {
  return (
    <>
      <SafeArea>
        <View>
          <Title>Coins Earned</Title>
        </View>
        <Coins>
          <Ionicons name="settings-outline" size={40} color="#3895d3" />
          <CoinsEarned>
            <Text style={{ color: "grey" }}>Rewards in process</Text>
            <Text style={{ color: "#3895d3" }}>
              260 <FontAwesome5 name="coins" size={18} color="#3895d3" />
            </Text>
          </CoinsEarned>
        </Coins>
        <FontAwesome
          name="arrow-down"
          size={24}
          color="#3895d3"
          style={{ paddingLeft: 40 }}
        />
        <Coins>
          <FontAwesome5 name="coins" size={40} color="#3895d3" />
          <CoinsEarned>
            <Text style={{ color: "grey" }}>Coins Earned</Text>
            <Text style={{ color: "#3895d3" }}>
              260 <FontAwesome5 name="coins" size={18} color="#3895d3" />
            </Text>
          </CoinsEarned>
        </Coins>
        <FontAwesome
          name="arrow-down"
          size={24}
          color="#3895d3"
          style={{ paddingLeft: 40 }}
        />
        <Coins>
          <FontAwesome5 name="coins" size={40} color="#3895d3" />
          <CoinsEarned>
            <Text style={{ color: "grey" }}>Balance coins</Text>
            <Text style={{ color: "#3895d3" }}>
              260 <FontAwesome5 name="coins" size={18} color="#3895d3" />
            </Text>
          </CoinsEarned>
        </Coins>
        <View style={{ padding: 40, alignItems: "center" }}>
          <TouchableOpacity style={{ backgroundColor: "green" }}>
            <Text style={{ color: "white", padding: 10 }}>Redeem now</Text>
          </TouchableOpacity>
        </View>
      </SafeArea>
    </>
  );
}
