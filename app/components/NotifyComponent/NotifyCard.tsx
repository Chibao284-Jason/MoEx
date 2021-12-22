import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import {style} from './styles';
import {useTranslation} from 'react-i18next';
interface NotifyCardProps {
  onPressNotifyCard?: () => void;
}

const NotifyCard = (props: NotifyCardProps) => {
  const {onPressNotifyCard} = props;
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerBody}>
      <TouchableOpacity style={styles.viewCard} onPress={onPressNotifyCard}>
        <View
          style={{
            width: '15%',
            justifyContent: 'flex-start',
          }}>
          <AutoHeightImage
            source={require('../../assets/img/iconNotify.png')}
            width={35}
            style={{marginTop: 3}}
          />
        </View>
        <View style={{width: '85%'}}>
          <Text style={styles.textHeading}>Thưởng Stacking VNDC</Text>
          <Text style={styles.textDesc}>
            Bạn vừa nhận được 3.31 VNDC từ chương trình stacking của MoEx
          </Text>
          <Text style={styles.textTime}>Khoảng 21 giờ trước</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotifyCard;
