import React from "react";
import { View, Image, StyleSheet } from "react-native";

const logo = require("../../../../assets/splash.png");

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default Splash;
