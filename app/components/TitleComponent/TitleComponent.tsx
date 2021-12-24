import React from 'react';
import {Text, View, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface TitleComponentProps {
  isSubtitle?: boolean;
  title: string;
  subTitle?: string;
  titleStyles?: TextStyle;
  subTitleStyle?: TextStyle;
  containerStyle?: ViewStyle;
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
    containerStyle,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
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
