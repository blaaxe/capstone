import React from "react";
import { View, Text } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <Button name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')}> </Button>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
