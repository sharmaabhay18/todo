import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export default class Input extends Component {
  state = { text: '' };

  onChangeText = text => this.setState({ text });

  onSubmitEditing = () => {
    const { onSubmitEditing } = this.props;
    const { text } = this.state;

    if (!text) return; // Don't submit if empty

    onSubmitEditing(text);
    this.setState({ text: '' });
  };

  render() {
    const { placeholder } = this.props
    const { value } = this.state
    return (
      <View style={style.inputStyle}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
          style={style.inputText}
        />
      </View>
    );
  }
}

const style = {
  inputStyle: {
    flex: 1,
  },
  inputText: {
    height: 75,
    paddingLeft: 10,
    paddingRight: 15,
  },
};
