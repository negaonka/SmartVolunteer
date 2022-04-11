import { MaterialIcons } from "@expo/vector-icons";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { AsyncStorage, Text } from "react-native";

export const PaymentScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const { check } = route.params;

  const onChange = async (formData) => {
    const { values, status } = formData;
    const isInComplete = Object.values(status).includes("incomplete");
    if (check) {
      await AsyncStorage.setItem("formData", formData);
    }
  };

  if (!check) {
    return (
      <>
        <SafeArea>
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            color="#3895d3"
            style={{ padding: 20 }}
            onPress={() => navigation.navigate("DonateScreen")}
          />
          <LiteCreditCardInput onChange={onChange} />
        </SafeArea>
      </>
    );
  } else {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("formData");
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    return (
      <>
        <SafeArea>
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            color="#3895d3"
            style={{ padding: 20 }}
            onPress={() => navigation.navigate("DonateScreen")}
          />
          <LiteCreditCardInput onChange={getData} />
        </SafeArea>
      </>
    );
  }
};
