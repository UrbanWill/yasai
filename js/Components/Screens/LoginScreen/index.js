import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

const LoginComponent = ({ setIsAuthenticated }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Sign in to continue</Text>
        <View style={styles.inputContainer}>
          <TextInput clearTextOnFocus={true} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput clearTextOnFocus={true} placeholder="Password" />
        </View>
        <Button title="Login" onPress={() => setIsAuthenticated(true)} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.4,
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: 4,
    width: "40%",
    marginVertical: 10,
  },
});

export default LoginComponent;
