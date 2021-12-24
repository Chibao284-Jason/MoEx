import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface CardIntroduceProps {}

const CardIntroduce = (props: CardIntroduceProps) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerCardIntroduce}>
      <View style={styles.viewTouchRefer}>
        <Text style={styles.textDesc}>{t('PRESENTER')}</Text>
        <TouchableOpacity>
          <Text style={styles.textViewAll}>{t('ADD_PRESENTER')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardIntroduce;
