import React from 'react';
import { Text, View } from 'react-native';
import styles from './HeaderStyle';

const Header: React.FC = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTextStyle}>Discover</Text>
      <Text style={styles.subHeaderStyle}>News from all over the world</Text>
    </View>
  );
};

export default Header;
