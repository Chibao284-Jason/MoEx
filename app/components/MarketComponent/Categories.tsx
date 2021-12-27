import ButtonTitleWhite from '@components/ButtonTitleWhiteComponent/ButtonTitleWhiteComponent';
import {colorsTheme} from '@config';
import React, {useState} from 'react';
import {View, TextInput, Alert, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'react-native-elements';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  const [textSearch, setTextSearch] = useState('');
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
        titleButton="Create new category"
      />
    </View>
  );
};

export default Categories;
