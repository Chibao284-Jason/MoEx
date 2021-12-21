/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React, {useEffect} from 'react';
import {ActivityIndicator, LogBox} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from '@config';
import {NavigationStack as Navigator} from '@navigation';
import configureStore from './store';
import {IThemeState} from '@models/reducers/theme';
import './i18n/i18n';
import i18n from './i18n/i18n';
import {ILanguageState} from '@models/reducers/language';
const {persistor, store} = configureStore();

interface IState {
  themeReducer: IThemeState;
  languageReducer: ILanguageState;
}

const RootNavigation: React.FC = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const language = useSelector(
    (state: IState) => state.languageReducer.language,
  );
  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);
  return (
    <PaperProvider theme={paperTheme}>
      <Navigator theme={combinedTheme} />
    </PaperProvider>
  );
};

const App: React.FC = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
