import TitleComponent from '@components/TitleComponent/TitleComponent';
import {screenName} from '@navigation';
import {useNavigation} from '@react-navigation/native';
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
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <TitleComponent
          title={t('NEWS')}
          isSubtitle={true}
          subTitle={t('VIEW_ALL')}
          subTitleStyle={styles.textViewAll}
        />
      </View>
      <View style={styles.containerBody}>
        {dataExample.map(item => {
          return (
            <CardNewsItem
              onPressCardNews={() =>
                navigation.navigate(screenName.COMING_SOON as never)
              }
            />
          );
        })}
      </View>
    </View>
  );
};

export default CardNewList;
