import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as NewsProvider } from './src/store/contexts/NewsContext';
import { Provider as ThemeProvider } from './src/store/contexts/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n';
import RootContainer from './src/RootContainer';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <NewsProvider>
          <ThemeProvider>
            <RootContainer />
          </ThemeProvider>
        </NewsProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
