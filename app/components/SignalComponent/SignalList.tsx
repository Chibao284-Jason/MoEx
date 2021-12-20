import TitleComponent from '@components/TitleComponent/TitleComponent';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import SignalItem from './SignalItem';
import {style} from './styles';
interface SignalListProps {}
const dataExample = [0, 1, 2];
const SignalList = (props: SignalListProps) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <TitleComponent
          title={t('SIGNAL')}
          subTitle={t('VIEW_ALL')}
          isSubtitle={true}
          subTitleStyle={styles.textViewAll}
        />
      </View>
      {dataExample.map(item => {
        return <SignalItem />;
      })}
    </View>
  );
};

export default SignalList;