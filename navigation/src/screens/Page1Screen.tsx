import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/native-stack';

import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export default function Page1Screen({navigation}: Props) {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to Page1Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
