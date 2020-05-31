import React, { useState } from "react";
import PropTypes from "prop-types";
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

const propTypes = {
  setIsAuthenticated: PropTypes.func,
};

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: 4,
    width: "40%",
    marginVertical: 10,
  },
});

LoginComponent.propTypes = propTypes;
export default LoginComponent;
