import TitleComponent from '@components/TitleComponent/TitleComponent';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import CardNewsItem from './CardNewsItem';
import {style} from './styles';
interface CardNewListProps {}
const dataExample = [0, 1, 2, 3];
const CardNewList = (props: CardNewListProps) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <TitleComponent
          title="Tin tức mới"
          isSubtitle={true}
          subTitle={t('VIEW_ALL')}
          subTitleStyle={styles.textViewAll}
        />
      </View>
      <View style={styles.containerBody}>
        {dataExample.map(item => {
          return <CardNewsItem />;
        })}
      </View>
    </View>
  );
};

export default CardNewList;
