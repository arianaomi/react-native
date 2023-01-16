import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';

export default function Page2Screen() {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo', //Este tiene mas peso que el que esta establecido de manera global (lo sobre escribe)
      headerBackTitle:'Back'
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Go to Page3Screen"
        onPress={() => navigator.navigate('Page3')}
      />
    </View>
  );
}
