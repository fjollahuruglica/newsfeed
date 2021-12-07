import React from 'react';
import { Switch, View } from 'react-native';

type Props = {
  selectedTheme: boolean;
  onThemeChange: (event: any) => void;
};

const ThemeSwitcher: React.FC<Props> = ({ selectedTheme, onThemeChange }) => {
  return (
    <View>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={selectedTheme ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => onThemeChange(!selectedTheme)}
        value={selectedTheme}
      />
    </View>
  );
};

export default ThemeSwitcher;
