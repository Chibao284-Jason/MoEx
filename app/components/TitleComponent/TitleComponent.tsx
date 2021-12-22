import React from 'react';
import {Text, View, TouchableOpacity, TextStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface TitleComponentProps {
  isSubtitle?: boolean;
  title: string;
  subTitle?: string;
  titleStyles?: TextStyle;
  subTitleStyle?: TextStyle;
  onPressSubTitle?: () => void;
}

const TitleComponent = (props: TitleComponentProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {
    isSubtitle,
    title,
    subTitle,
    subTitleStyle,
    onPressSubTitle,
    titleStyles,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.textTitle, titleStyles]}>{title}</Text>
      {isSubtitle && (
        <TouchableOpacity onPress={onPressSubTitle}>
          <Text style={subTitleStyle}>{subTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TitleComponent;
