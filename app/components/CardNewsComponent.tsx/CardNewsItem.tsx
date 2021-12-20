import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import {style} from './styles';
import {useTranslation} from 'react-i18next';
import {LineLarge} from '@components/LineComponent/LineLarge';
interface CardNewsItemProps {}

const CardNewsItem = (props: CardNewsItemProps) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.viewItem}>
      <View style={{marginBottom: 20}}>
        <TouchableOpacity style={styles.viewCard}>
          <View
            style={{
              width: '60%',
            }}>
            <Text style={styles.textHeading}>
              Hỗ trợ kế hoạch hoán đổi & định danh lại token bZx (BZRX) thành
              token OokiDAO (OOKI)
            </Text>
            <Text style={styles.textDesc}>Khoảng 21 giờ trước</Text>
          </View>
          <View style={{width: '40%', alignItems: 'flex-end'}}>
            <AutoHeightImage
              source={{
                uri: 'https://blog.attlas.io/wp-content/uploads/2021/12/358aef082206e858b117.jpg',
              }}
              width={110}
              height={110}
              style={{borderRadius: 8}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <LineLarge sizeLine={2} width={'65%'} />
    </View>
  );
};

export default CardNewsItem;
