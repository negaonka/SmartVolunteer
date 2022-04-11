import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { useContext, useEffect, useState } from "react";
import { EventsContext } from "../../../services/events/events.context";
import { getUserLocation } from "../../../services/location/location.service";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

//convert to map and check inside render function
export const MapsScreen = ({ navigation }) => {
  const { events = [] } = useContext(EventsContext);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    getUserLocation()
      .then((res) => {
        console.log(res);
        setLocationData(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  if (locationData != null) {
    const region = {
      latitude: locationData.coords.latitude,
      longitude: locationData.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    return (
      <>
        <Search />
        <Map initialRegion={region}>
          {events.map((event) => {
            return (
              <MapView.Marker
                key={event.eventTitle}
                title={event.eventTitle}
                coordinate={{
                  latitude: event.geometry.lat,
                  longitude: event.geometry.lng,
                }}
              >
                <MapView.Callout
                  onPress={() => navigation.navigate("EventDetail", { event })}
                >
                  <MapCallout event={event} />
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </Map>
      </>
    );
  } else {
    return (
      <>
        <Search />
        <Map />
      </>
    );
  }
};
