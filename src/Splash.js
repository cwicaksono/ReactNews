import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, NavigationActions, StackActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Splash extends React.Component {
  static navigationOptions = {
    headerShown: false
  }

  constructor(props){
    super(props)
    this.state = {
      ready: false
    }

    setTimeout(() => {
      this.setState({
        ready: true
      })
    }, 1000);
  }

  componentDidUpdate(){
    if(this.state.ready){
      const actionToDispatch = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: "Home" })
        ]
      });
      this.props.navigation.dispatch(actionToDispatch);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}