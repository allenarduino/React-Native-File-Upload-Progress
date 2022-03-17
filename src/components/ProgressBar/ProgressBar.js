import React from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { Styles } from './Styles';

export const MyProgressBar = ({ progress }) => {
  return (
    <ProgressBar
      progress={progress}
      color="teal"
      unfilledColor="#3333"
      width={170}
      height={13}
      borderWidth={0}
      style={Styles.progressStyle}
    />
  );
};
