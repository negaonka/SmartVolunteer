import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { useContext, useEffect, useState } from "react";

import { EventsContext } from "../../../services/events/events.context";

import { getUserLocation } from "../../../services/location/location.service";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

//convert to map and check inside render function
export const MapsScreen = () => {
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
            return null;
          })}
          {/* {<Marker coordinate={region} />}*/}
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
