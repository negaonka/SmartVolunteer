import * as Location from "expo-location";

export const eventsRequest = (location) => {
  // return fetch("http://192.168.1.150:5000/api/event").then((res) => {
  if (location.message !== "Could not find the given location") {
    return fetch("http://192.168.1.150:5000/api/event/getEventsByLocation", {
      headers: {
        accessToken: "U21hcnRWb2x1bnRlZXJBcHA=",
        location: location[0].location,
      },
    }).then((res) => {
      return res.json();
    });
  } else {
    return fetch("http://192.168.1.150:5000/api/event", {
      headers: {
        accessToken: "U21hcnRWb2x1bnRlZXJBcHA=",
      },
    }).then((res) => {
      return res.json();
    });
  }
};

export const eventsTransform = async (results = []) => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission to access location was denied");
    return;
  }
  let location = await Location.getCurrentPositionAsync({});
  console.log(location);
  return results;
};
