import ButtonHeaderComponent from '@components/ButtonHeaderComponent/ButtonHeaderComponent';
import {style} from './styles';
import * as React from 'react';
import {useTheme} from 'react-native-paper';
import {
  View,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  Text,
} from 'react-native';
import ButtonNotifications from '@components/ButtonHeaderComponent/ButtonNotifications';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';

interface IHeaderComponentProps {
  isButtonLeft?: boolean;
  isButtonCenter?: boolean;
  isButtonRight?: boolean;
  headerLeft?: () => void;
  headerRight?: () => void;
  onPressNotify?: () => void;
  isAvatar?: boolean;
  imgAuthor?: ImageSourcePropType;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  iconLeftStyle?: ImageStyle;
  iconRightStyle?: ImageStyle;
  buttonLeftStyle?: ViewStyle;
  buttonRightStyle?: ViewStyle;
  styleHeader?: ViewStyle;
  title?: string;
  labelRight?: string;
  lineHeader?: boolean;
  isNotify?: boolean;
  iconNotify?: ImageSourcePropType;
  customButtonRight?: Element;
  customButtonLeft?: Element;
}

interface IState {
  themeReducer: IThemeState;
}

const HeaderComponent = (props: IHeaderComponentProps) => {
  const {
    isButtonLeft,
    headerLeft,
    isButtonCenter,
    headerRight,
    isButtonRight,
    iconLeft,
    iconRight,
    iconLeftStyle,
    iconRightStyle,
    buttonLeftStyle,
    buttonRightStyle,
    title,
    isAvatar,
    labelRight,
    styleHeader,
    lineHeader = true,
    isNotify,
    onPressNotify,
    iconNotify,
    customButtonRight,
    customButtonLeft,
  } = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const iconLeftDefault = !isDark
    ? require('../../assets/img/goBack.png')
    : require('../../assets/img/goBackDark.png');
  return (
    <View style={[styles.viewHeader, styleHeader]}>
      <View style={styles.viewContainer}>
        {customButtonLeft}
        {isButtonLeft && headerLeft && (
          <ButtonHeaderComponent
            imgIcon={
              iconLeft ? iconLeft : iconLeftDefault
              // {
              //     uri: 'https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png',
              //   }
            }
            onPress={headerLeft}
            iconStyles={iconLeftStyle}
            buttonStyle={buttonLeftStyle}
          />
        )}
        {title && (
          <View>
            <Text style={styles.textTitle}>{title}</Text>
          </View>
        )}
        {isButtonRight && headerRight && (
          <ButtonHeaderComponent
            imgIcon={
              iconRight
                ? iconRight
                : {
                    uri: 'https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png',
                  }
            }
            onPress={headerRight}
            iconStyles={iconRightStyle}
            buttonStyle={buttonRightStyle}
            label={labelRight}
          />
        )}
        {isNotify && onPressNotify && (
          <ButtonNotifications
            imgIcon={
              iconNotify
                ? iconNotify
                : {
                    uri: 'https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png',
                  }
            }
            onPress={onPressNotify}
            iconStyles={iconRightStyle}
            buttonStyle={buttonRightStyle}
            label={labelRight}
          />
        )}
        {customButtonRight}
      </View>
      <View style={styles.line(lineHeader)} />
    </View>
  );
};

export default HeaderComponent;
