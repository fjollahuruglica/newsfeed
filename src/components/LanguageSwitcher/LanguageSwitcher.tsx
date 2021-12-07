import { useTheme } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from '../../components/DefaultText/DefaultText';
import { Images } from '../../theme';
import styles from './LanguageSwitcherStyle';

type Props = {
  language: string;
  selectedLang: string;
  onLanguageChange: (language: string) => void;
};

const LanguageSwitcher: React.FC<Props> = ({
  language,
  selectedLang,
  onLanguageChange,
}) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => onLanguageChange(language)}
      style={{
        ...styles.languageContainer,
        backgroundColor:
          language === selectedLang ? colors.primary : colors.text,
      }}>
      <Image
        source={language === 'en' ? Images.usa : Images.japan}
        style={styles.languageIcon}
      />
      <DefaultText
        text={
          language === 'en'
            ? t('english.translation')
            : t('japanese.translation')
        }
        style={{ ...styles.languageText, color: colors.background }}
      />
    </TouchableOpacity>
  );
};

export default LanguageSwitcher;
