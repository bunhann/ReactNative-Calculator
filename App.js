/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Row from "./src/components/Row";
import Button from "./src/components/Button";
import calculator, { initialState } from "./src/utils/calculator";

import RNBootSplash from "react-native-bootsplash";

class App extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 2000);
  }
  state = initialState;
  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Text style={styles.value}>
          {parseFloat(this.state.currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => this.handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => this.handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => this.handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => this.handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => this.handleTap("number", 7)} />
          <Button text="8" onPress={() => this.handleTap("number", 8)} />
          <Button text="9" onPress={() => this.handleTap("number", 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => this.handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => this.handleTap("number", 4)} />
          <Button text="5" onPress={() => this.handleTap("number", 5)} />
          <Button text="6" onPress={() => this.handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => this.handleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => this.handleTap("number", 1)} />
          <Button text="2" onPress={() => this.handleTap("number", 2)} />
          <Button text="3" onPress={() => this.handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => this.handleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => this.handleTap("number", 0)}
          />
          <Button text="." onPress={() => this.handleTap("number", ".")} />
          <Button
            text="="
            theme="accent"
            onPress={() => this.handleTap("equal")}
          />
        </Row>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 52,
    fontWeight: '500',
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export default App;
