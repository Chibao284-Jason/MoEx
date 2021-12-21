import TitleComponent from '@components/TitleComponent/TitleComponent';
import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import SignalItem from './SignalItem';
import {style} from './styles';
interface SignalListProps {
  isTitle?: boolean;
}
const dataExample = [0, 1, 2];
const SignalList = (props: SignalListProps) => {
  const {isTitle = true} = props;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {isTitle && (
        <View style={styles.viewTitle}>
          <TitleComponent
            title={t('SIGNAL')}
            subTitle={t('VIEW_ALL')}
            isSubtitle={true}
            subTitleStyle={styles.textViewAll}
          />
        </View>
      )}
      {dataExample.map(item => {
        return (
          <SignalItem
            onPressSignal={() => navigation.navigate(screenName.COMING_SOON)}
          />
        );
      })}
    </View>
  );
};

export default SignalList;
