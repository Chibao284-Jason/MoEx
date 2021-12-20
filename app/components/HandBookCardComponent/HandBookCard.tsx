import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface CardComponentProps {
  imgUri?: ImageSourcePropType;
  content?: string;
  onPressHandBook?: () => void;
  isDark?: boolean;
}
const widthDefault = 250;
const HandBookCard = (props: CardComponentProps) => {
  const {imgUri, content, isDark = false, onPressHandBook} = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View>
      <TouchableOpacity
        style={[styles.containerCard, {width: widthDefault}]}
        onPress={onPressHandBook}>
        <AutoHeightImage
          source={{
            uri: 'https://blog.attlas.io/wp-content/uploads/2021/10/Attlas_Minigame-du-doan-Top-Gainer-02-1-1024x642.jpg',
          }}
          width={widthDefault}
          style={styles.imgCard}
        />
        <View style={styles.viewDescCard}>
          <Text style={styles.textDesc} numberOfLines={2}>
            Minigame: Đua trend mới, dự đoán top coin
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HandBookCard;
