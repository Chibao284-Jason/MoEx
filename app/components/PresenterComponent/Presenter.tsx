import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import {colorsTheme} from '@config';
import {IThemeState} from '@models/reducers/theme';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {style} from './styles';
interface IState {
  themeReducer: IThemeState;
}

interface PresenterProps {}

const Presenter = (props: PresenterProps) => {
  const [textSearch, setTextSearch] = useState('');
  const {t} = useTranslation();
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.containerPresenter}>
      <HeaderComponent
        title={t('CHANGE_REFERRER')}
        isButtonLeft={true}
        iconLeft={
          !isDark
            ? require('../../assets/img/goBack.png')
            : require('../../assets/img/goBackDark.png')
        }
        iconLeftStyle={{width: 25}}
        headerLeft={() => navigation.goBack()}
        headerRight={() => console.log('')}
        isButtonRight={true}
        iconRight={{uri: ''}}
      />
      <View style={styles.viewBody}>
        <View>
          <Text style={styles.label}>{t('LINK_OR_ID')}</Text>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder={t('ENTER_LINK_OR_ID')}
              style={styles.input}
              onChangeText={text => {
                setTextSearch(text);
              }}
              placeholderTextColor={colorsTheme.manatee}
              value={textSearch}
            />
          </View>
        </View>
        <ButtonTitleWhite
          titleButton={t('SAVE')}
          viewButtonStyle={styles.viewButton}
          touchButtonStyle={styles.touchButton(textSearch)}
          titleStyle={{color: 'white'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Presenter;
