import AppNavigator from "./navigators/main-navigator"
import React from 'react';
import { createAppContainer } from "react-navigation"
import { connect } from "react-redux"

const Navigator = createAppContainer(AppNavigator);

class AppNavigation extends React.Component {
  render(){
    return (
      <>
        <Navigator />
      </>
    )
  }
};

export default connect(null, null)(AppNavigation);