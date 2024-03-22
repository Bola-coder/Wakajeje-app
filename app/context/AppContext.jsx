import React, {createContext, useContext, useState, useEffect} from 'react'
import * as Location from "expo-location";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}


const AppProvider = ({children}) => {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState();

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setLocationError("Location permission denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation)
      // console.log(location);
    } catch (error) {
      console.error("Error requesting location permission:", error);
      setLocationError("Error getting user location:: ", error.message)
    }
  };


    const values = {location, locationError, getLocation}

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppProvider
