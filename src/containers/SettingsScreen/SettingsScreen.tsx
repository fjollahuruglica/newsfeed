import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultText from '../../components/DefaultText/DefaultText';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context as NewsContext } from '../../store/contexts/NewsContext';
import { Fonts, Helpers } from '../../theme';

const SettingsScreen: React.FC = () => {
  const {
    state: { language },
    changeLanguage,
  } = useContext(NewsContext);
  const [selectedLang, setSelectedLang] = useState(language);

  const { t } = useTranslation();
  useEffect(() => {
    getData();
  }, []);

  const onChange = (lang: string) => {
    changeLanguage(lang);
    setSelectedLang(lang);
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
      }
    } catch (e) {
      // error reading value
    }
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
          style={{ ...Fonts.xxlarge }}
          bold
        />
        <LanguageSwitcher
          selectedLang={selectedLang}
          language="en"
          onChange={onChange}
        />
        <LanguageSwitcher
          selectedLang={selectedLang}
          language="jp"
          onChange={onChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
