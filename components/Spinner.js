import React from "react";
import { View} from 'react-native';
import {Spinner} from 'native-base';

//styles
import {styles} from '../styles/styles'

const SpinnerC = () => (
  <View style={styles.Spinner}>
    <Spinner color="danger.400" />
  </View>
);

export default SpinnerC;