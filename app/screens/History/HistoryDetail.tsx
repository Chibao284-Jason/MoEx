import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style, widthImg} from './styles';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import AutoHeightImage from 'react-native-auto-height-image';
import {LineLarge} from '@components/LineComponent/LineLarge';
import TitleHistory from '@components/TitleComponent/TitleHistory';
import dayjs from 'dayjs';
import {colorsTheme} from '@config';
import ThemeController from '@components/ThemeController';

interface HistoryDetailProps {}

const dateTemp = new Date();
const HistoryDetail = (props: HistoryDetailProps) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const styles = style(colors as ThemeColors);
  return (
    <SafeAreaView style={styles.containerHistoryDetail}>
      <HeaderComponent
        isButtonLeft
        headerLeft={() => navigation.goBack()}
        title="Trả lãi stacking"
        headerRight={() => console.log('')}
        isButtonRight={true}
        iconRight={{uri: ''}}
      />
      <View style={styles.bodyHistoryDetail}>
        <AutoHeightImage
          source={{
            uri: 'https://attlas-cdn.sgp1.cdn.digitaloceanspaces.com/attlas.io/public/images/coins/128x128/617.png',
          }}
          width={widthImg}
          style={styles.imgCoinHistoryDetail}
        />
        <View style={styles.viewBodyHistoryDetail}>
          <View style={styles.viewHorizontal}>
            <View style={styles.viewCoverStatusAndValue}>
              <Text style={styles.textValue}>+3.32 VNDC</Text>
              <View style={styles.viewStatus}>
                <Text style={styles.textStatus}>Thành công</Text>
              </View>
            </View>

            <LineLarge sizeLine={1} lineStyle={{marginVertical: 25}} />
            <TitleHistory title="Mã giao dịch" subTitle="VNDC075728739" />
            <TitleHistory
              title="Ngày"
              subTitle={dayjs(dateTemp).format('HH:mm:ss YYYY-MM-DD')}
            />
            <TitleHistory
              title="Từ"
              subTitle="Attlas System"
              titleAlias="@attlas_sake"
            />
            <TitleHistory
              title="Đến"
              subTitle="Bảo Nguyễn Chí"
              titleAlias="@BaoNC3"
            />
            <TitleHistory title="Giao dịch" subTitle="Trả lãi staking" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HistoryDetail;
