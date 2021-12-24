import React from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import * as themeActions from 'app/store/actions/themeActions';
import {IThemeState} from 'app/models/reducers/theme';
import {changeLanguage} from '@store/actions/changeLanguageActions';
import i18n from 'app/i18n/i18n';
import {useTranslation} from 'react-i18next';
import {colorsTheme} from '@config';
interface IState {
  themeReducer: IThemeState;
}

const ThemeController: React.FC = () => {
  const {t} = useTranslation();
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);

  const dispatch = useDispatch();
  const onToggleTheme = () => {
    dispatch(themeActions.setIsDarkTheme(!isDark));
  };
  const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
  const iconColor = isDark ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Switch
        value={isDark}
        onValueChange={onToggleTheme}
        trackColor={{false: colorsTheme.manatee, true: colorsTheme.persianBlue}}
      />
      <Icon name={iconName} size={20} style={styles.icon} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {marginRight: 4},
});

export default ThemeController;
