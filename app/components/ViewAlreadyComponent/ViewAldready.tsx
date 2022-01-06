import React from 'react';
import {colorsTheme} from '@config';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity, ViewStyle} from 'react-native';
import {style} from './styles';
interface ViewAlreadyProps {
  viewAlreadyStyle?: ViewStyle;
  titleButton?: string;
  onPressAlready?: () => void;
}

const ViewAlready = (props: ViewAlreadyProps) => {
  const {viewAlreadyStyle, titleButton, onPressAlready} = props;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={[styles.viewAlready, viewAlreadyStyle]}>
      <Text style={{color: colorsTheme.manatee}}>{t('ALREADY_ACCOUNT')}</Text>
      <TouchableOpacity style={styles.touchAlready} onPress={onPressAlready}>
        <Text style={styles.textAlreadySubmit}>
          {titleButton ? titleButton : t('SIGN_IN')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAlready;
