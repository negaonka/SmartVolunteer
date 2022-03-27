import React, { useState, createContext, useEffect, useContext } from "react";
import { eventsRequest, eventsTransform } from "./events.service";
import { LocationContext } from "../location/location.context";

export const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveEvents = (loc) => {
    setIsLoading(true);
    setEvents([]);

    eventsRequest(loc)
      .then((result) => {
        console.log(result);
        setIsLoading(false);
        setEvents(result);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      retrieveEvents(location);
    }
  }, [location]);

  return (
    <EventsContext.Provider
      value={{
        events,
        isLoading,
        error,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
