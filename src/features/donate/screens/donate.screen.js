import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

const Title = styled(Text)`
  color: grey;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding-top: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
`;

export default function DonateScreen() {
  const [donationAmount, setDonationAmount] = useState(null);
  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <SafeArea>
        <View>
          <Title>Choose an amount to donate</Title>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDonationAmount("10")}
          >
            <Text>10 £</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDonationAmount("50")}
          >
            <Text>50 £</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDonationAmount("100")}
          >
            <Text>100 £</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDonationAmount("200")}
          >
            <Text>200 £</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <TextInput
            style={{
              backgroundColor: "lightblue",
              textAlign: "center",
              fontSize: 20,
              padding: 10,
            }}
            placeholder={"Other"}
            onChangeText={(amount) => setDonationAmount(amount)}
            keyboardType="numeric"
            value={donationAmount}
          />
          {/*<Text style={{ padding: 10, fontSize: 20 }}>£</Text>*/}
        </View>
        <View style={styles.checkboxContainer}>
          {/*<CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />*/}
          <Text style={styles.label}>I want to donate this monthly</Text>
        </View>
      </SafeArea>
    </>
  );
}

//checkbox and change color on button is remaing

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    flex: 1,
    backgroundColor: "lightblue",
    marginLeft: 20,
  },
  buttons: {
    flexDirection: "row",
    padding: 30,
    paddingLeft: 10,
  },
  input: {
    paddingLeft: 40,
    fontSize: 20,
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    padding: 40,
  },
  label: {
    margin: 8,
    color: "grey",
    fontSize: 20,
  },
});
