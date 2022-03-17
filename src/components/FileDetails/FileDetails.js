import React from 'react';
import { Text, View, Platform } from 'react-native';
import { Styles } from './Style';

export const FileDetails = ({ file }) => {
  return (
    <View style={Styles.Detailcontainer}>
      <Text style={Styles.textStyle}>{`${file['assets'][0]['fileName']}`}</Text>
      <Text style={Styles.textStyle}>
        {Platform.OS === 'ios'
          ? file['assets'][0]['uri'].replace('file://', '')
          : file['assets'][0]['uri']}
      </Text>
      <Text style={Styles.textStyle}>{`${file['assets'][0]['type']}`}</Text>
    </View>
  );
};
