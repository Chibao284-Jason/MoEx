import TitleComponent from '@components/TitleComponent/TitleComponent';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-native-paper';
import HandBookCard from './HandBookCard';
import {style} from './styles';
interface HandBookListProps {
  isDark?: boolean;
}
const dataExample = [0, 1, 2, 3, 4];
const HandBookList = (props: HandBookListProps) => {
  const {isDark} = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {t} = useTranslation();
  return (
    <View style={styles.containerList}>
      <View style={styles.viewTitle}>
        <TitleComponent
          title={t('INVESTMENT_HANDBOOK')}
          subTitle={t('VIEW_ALL')}
          subTitleStyle={styles.textViewAll}
          isSubtitle={true}
        />
      </View>
      <LinearGradient
        colors={
          !isDark ? ['#FFFFFF', '#F4F4F6', '#F5F5F7'] : ['#131522', '#131522']
        }
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.containerBody}
          data={dataExample}
          renderItem={item => {
            return <HandBookCard isDark={isDark} />;
          }}
        />
      </LinearGradient>
    </View>
  );
};

export default HandBookList;
