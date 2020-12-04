import React from 'react';
import { Provider } from 'react-redux';
import Navigation from "./src/navigations"
import { store } from './src/redux/store';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

class App extends React.Component{
  statusBarColor = "#6F8560";

  render(){
    return (
      <>
        <Provider store={store} >
          <StatusBar backgroundColor={this.statusBarColor} hidden={false} />
          <Navigation />
        </Provider>
      </>
    );
  }
};

export default App;