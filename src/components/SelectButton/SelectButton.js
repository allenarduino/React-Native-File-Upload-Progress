import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';

export const SelectButton = ({ handleChoosePhoto }) => {
  return (
    <TouchableOpacity style={Styles.Button} onPress={handleChoosePhoto}>
      <Text style={Styles.ButtonText}>Select File</Text>
    </TouchableOpacity>
  );
};
