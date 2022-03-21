import React, { useState, createContext, useEffect, useMemo } from "react";
import { eventsRequest } from "./events.service";

export const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveEvents = () => {
    setIsLoading(true);
    setEvents([]);

    eventsRequest()
      .then((results) => {
        setIsLoading(false);
        setEvents(results);
        console.log(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    retrieveEvents();
  }, []); // run the useEffect when the component mounts

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
