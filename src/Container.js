import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import Input from './components/Input';
import List from './components/List';

class Container extends Component {

  todoAdd = (text) => {
   actions.add_item(text);
  }

  todoRemove = (index) => {
  actions.remove_item(index);
  }

  render() {
    return (
     <View>
     <Input
     placeholder='Enter To-Do List'
     onSubmittingEditing={this.todoAdd}
     />
     <List>
     list={this.props.todoList}
     onPressItem={this.todoRemove}
     </List>
     </View>
    );
  }
}

const mapStateToProps = state => {
 return {
   todoList: state.todoList
 };
};

export default connect(mapStateToProps, actions)(Container);
