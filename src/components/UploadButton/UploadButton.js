import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';

export const UploadButton = ({ handleUpload }) => {
  return (
    <TouchableOpacity style={Styles.Button} onPress={handleUpload}>
      <Text style={Styles.ButtonText}>Upload Select File</Text>
    </TouchableOpacity>
  );
};
