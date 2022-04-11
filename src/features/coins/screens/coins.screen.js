import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { Text, View, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

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
  const [coins, setCoins] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);

  const retrieveData = async () => {
    try {
      const coins = await AsyncStorage.getItem("coins");
      const totalCoins = await AsyncStorage.getItem("totalCoins");
      const res = { coins: coins, totalCoins: totalCoins };
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    retrieveData().then((res) => {
      setCoins(JSON.parse(res.coins));
      setTotalCoins(JSON.parse(res.totalCoins));
    });
  }, []);

  const redeemCoins = async () => {
    try {
      const coins = await AsyncStorage.getItem("coins");
      const totalCoins = await AsyncStorage.getItem("totalCoins");
      if (totalCoins === null || totalCoins === "null") {
        setTotalCoins(coins);
        AsyncStorage.setItem("totalCoins", JSON.stringify(coins));
      } else {
        const coinsTotal = parseInt(coins) + parseInt(JSON.parse(totalCoins));
        setTotalCoins(coinsTotal);
        AsyncStorage.setItem("totalCoins", JSON.stringify(coinsTotal));
      }
      AsyncStorage.removeItem("coins");
      setCoins(await AsyncStorage.getItem("coins"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SafeArea>
        <View>
          <Title>Coins Earned</Title>
        </View>
        <Coins>
          <Ionicons name="settings-outline" size={40} color="#3895d3" />
          <CoinsEarned>
            <Text style={{ color: "grey" }}>Rewards earned</Text>
            <Text style={{ color: "#3895d3" }}>
              {coins} <FontAwesome5 name="coins" size={18} color="#3895d3" />
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
            <Text style={{ color: "grey" }}>Rewards used</Text>
            <Text style={{ color: "#3895d3" }}>
              {totalCoins}
              <FontAwesome5 name="coins" size={18} color="#3895d3" />
            </Text>
          </CoinsEarned>
        </Coins>
        <View style={{ padding: 40, alignItems: "center" }}>
          <TouchableOpacity
            style={{ backgroundColor: "green" }}
            onPress={redeemCoins}
          >
            <Text style={{ color: "white", padding: 10 }}>Redeem now</Text>
          </TouchableOpacity>
        </View>
      </SafeArea>
    </>
  );
}
