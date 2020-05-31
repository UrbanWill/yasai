import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Splash from "../Splash";
import LoginComponent from "../LoginScreen";

// Temporary hard coding authorization for organizational purposes,
// a proper authorization method will be implemented later.

const Launch = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [onColdStart, setOnColdStart] = useState(true);

  useEffect(() => {
    setOnColdStart(false);
  });

  if (onColdStart) {
    return <Splash />;
  }

  return isAuthenticated ? (
    <Text>MY APP</Text>
  ) : (
    <LoginComponent setIsAuthenticated={setIsAuthenticated} />
  );
};
export default Launch;
