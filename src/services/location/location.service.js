import * as Location from "expo-location";

export const locationRequest = (searchKeyword) => {
  return fetch("http://192.168.1.150:5000/api/event/getEventsByLocation", {
    headers: {
      accessToken: "U21hcnRWb2x1bnRlZXJBcHA=",
      location: searchKeyword,
    },
  }).then((res) => {
    return res.json();
  });
};

/*export const locationTransform = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission to access location was denied");
    return;
  }
  let location = await Location.getCurrentPositionAsync({});
  console.log(location);
  return location;
};*/

export async function getUserLocation() {
  return await Location.requestForegroundPermissionsAsync().then((res) => {
    console.log(res.granted);
    if (res.status === "granted") {
      console.log("granted");
      return Location.getCurrentPositionAsync({});
      // Permission denied
    } else {
      console.log("Location is not enabled");
    }
  });
}
