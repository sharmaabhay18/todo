import React from 'react';
import { Text,View, TouchableOpacity } from 'react-native';

const Footer = (props) => {
 return (
     <View style={style.footerView}>
     <TouchableOpacity 
     onPress= {props.onPress}
     >
    <Text style={style.footerText}> Delete All List </Text>
     </TouchableOpacity>
     </View>
   );
}

const style = {
  footerView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderColor: 'grey'
  } ,
  footerText: {
    color: 'red'
  }
};

export default Footer;