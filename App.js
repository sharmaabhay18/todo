import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import reducers from './src/reducers';
import Container from './src/Container';

export default class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View style={style.mainContainer}>
       <ScrollView>
        <Header headerText={'To-Do'} />
        <Container />
        </ScrollView>
        <Footer onPress={this.footerButton.bind(this)} />
      </View>
      </Provider>
    );
  }
}

const style = {
  mainContainer: {
    flex: 1
  }
};
