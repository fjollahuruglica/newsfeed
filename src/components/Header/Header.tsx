import React from 'react';
import { View } from 'react-native';
import styles from './HeaderStyle';
import DefaultText from '../DefaultText/DefaultText';

const Header: React.FC = () => {
  return (
    <View style={styles.headerStyle}>
      <DefaultText text="Discover" bold style={styles.headerTextStyle} />
      <DefaultText
        text="News from all over the world"
        style={styles.subHeaderStyle}
      />
    </View>
  );
};

export default Header;
