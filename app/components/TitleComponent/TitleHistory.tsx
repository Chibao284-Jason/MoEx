import React from 'react';
import {Text, View, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
interface TitleHistoryProps {
  title: string;
  subTitle?: string;
  titleStyles?: TextStyle;
  subTitleStyle?: TextStyle;
  containerStyle?: ViewStyle | ViewStyle[];
  onPressSubTitle?: () => void;
  titleAlias?: string;
}

const TitleHistory = (props: TitleHistoryProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {
    title,
    subTitle,
    subTitleStyle,
    onPressSubTitle,
    titleStyles,
    containerStyle,
    titleAlias,
  } = props;

  return (
    <View style={[styles.containerTitleHistory, containerStyle]}>
      <Text style={[styles.textTitleHistory, titleStyles]}>{title}</Text>
      {subTitle && (
        <TouchableOpacity onPress={onPressSubTitle}>
          <Text style={[styles.textSubtitleHistory, subTitleStyle]}>
            {subTitle}
          </Text>
          {titleAlias && (
            <Text style={[styles.textTitleAliasHistory, subTitleStyle]}>
              {titleAlias}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TitleHistory;
