import React from 'react';
import { Text, View} from 'react-native';

const Header = (props) => {
  const { headerView, headerText} = style;
  return(
    <View style={headerView}>
    <Text style={headerText}>{props.headerText}</Text>
    </View>
    );
};

const style = {
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'powderblue',
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 2
  }
};

export default Header;