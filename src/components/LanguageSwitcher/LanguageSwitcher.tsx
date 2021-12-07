import React from 'react';
import { Image, View } from 'react-native';
import DefaultText from '../../components/DefaultText/DefaultText';
import { Colors, Images } from '../../theme';
import styles from './LanguageSwitcherStyle';

type Props = {
  language: string;
};

const LanguageSwitcher: React.FC<Props> = ({ language }) => {
  return (
    <View
      style={{
        ...styles.languageContainer,
        backgroundColor: Colors.$primary,
      }}>
      <Image
        source={language === 'English' ? Images.usa : Images.japan}
        style={styles.languageIcon}
      />
      <DefaultText
        text={language}
        style={{ ...styles.languageText, color: Colors.$white }}
      />
    </View>
  );
};

export default LanguageSwitcher;
