/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultText from '../../components/DefaultText/DefaultText';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { Context as NewsContext } from '../../store/contexts/NewsContext';
import { Context as ThemeContext } from '../../store/contexts/ThemeContext';
import { Fonts, Helpers } from '../../theme';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import styles from './SettingsScreenStyle';
import { useTheme } from '@react-navigation/native';

const SettingsScreen: React.FC = () => {
  const {
    state: { language },
    changeLanguage,
  } = useContext(NewsContext);
  const {
    state: { isLight },
    changeTheme,
  } = useContext(ThemeContext);
  const [selectedLang, setSelectedLang] = useState(language);
  const [selectedTheme, setSelectedTheme] = useState(isLight);
  const { colors } = useTheme();
  const { t } = useTranslation();

  const onLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setSelectedLang(lang);
  };

  const onThemeChange = (event: any) => {
    setSelectedTheme(event);
    changeTheme(event);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          ...Helpers.horizontalMargin,
          ...Helpers.topMargin,
        }}>
        <DefaultText
          text={t('settings.translation')}
          style={{ ...Fonts.xxlarge, color: colors.primary }}
          bold
        />
        <LanguageSwitcher
          selectedLang={selectedLang}
          language="en"
          onLanguageChange={onLanguageChange}
        />
        <LanguageSwitcher
          selectedLang={selectedLang}
          language="jp"
          onLanguageChange={onLanguageChange}
        />
        <DefaultText
          text={t('themeChange.translation')}
          style={{
            ...Fonts.xxlarge,
            ...Helpers.topMargin,
            color: colors.primary,
          }}
          bold
        />
        <View style={styles.separator}>
          <DefaultText
            text={t('dark.translation')}
            style={{ ...Fonts.xlarge, color: colors.primary }}
          />
          <ThemeSwitcher
            selectedTheme={selectedTheme}
            onThemeChange={onThemeChange}
          />
          <DefaultText
            text={t('light.translation')}
            style={{ ...Fonts.xlarge, color: colors.primary }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
