import React from 'react';
import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerCategories}>
      <View style={styles.viewBodyCategories}>
        <AutoHeightImage
          width={170}
          source={require('../../assets/img/emptyfolder.png')}
        />
      </View>
      <ButtonTitleWhite
        viewButtonStyle={styles.viewButtonAdd}
        titleButton={t('CREATE_CATEGORIES')}
      />
    </View>
  );
};

export default Categories;
