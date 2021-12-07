import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultText from '../../components/DefaultText/DefaultText';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { Fonts, Helpers } from '../../theme';

const SettingsScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          ...Helpers.horizontalMargin,
          ...Helpers.topMargin,
        }}>
        <DefaultText
          text="Language Settings"
          style={{ ...Fonts.xxlarge }}
          bold
        />
        <LanguageSwitcher language="English" />
        <LanguageSwitcher language="Japanese" />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
