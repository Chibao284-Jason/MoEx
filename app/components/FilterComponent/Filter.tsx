import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
import TextInputPress from '@components/TextInputComponent/TextInputPress';
import ButtonDepositWithdraw from '@components/WalletComponent/ButtonDepositWithdraw';
import {colorsTheme} from '@config';
import {IThemeState} from '@models/reducers/theme';
import {useSelector} from 'react-redux';
import ThemeController from '@components/ThemeController';
import DateTimePicker, {
  AndroidMode,
} from '@react-native-community/datetimepicker';
interface FilterProps {}
interface IState {
  themeReducer: IThemeState;
}
const Filter = (props: FilterProps) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const styles = style(colors as ThemeColors);
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const iconInput = isDark
    ? require('../../assets/img/calendarWhite.png')
    : require('../../assets/img/calendar.png');

  return (
    <View style={[styles.containerFilter]}>
      <ThemeController />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titleFilter}>Bộ lọc</Text>
      </View>
      <Text style={styles.textLabel}>Lịch sử</Text>
      <View style={styles.viewInput}>
        <TextInputPress valueInput={t('Tất cả')} />
      </View>
      <Text style={styles.textLabel}>Trạng thái</Text>
      <View style={[{flexDirection: 'row'}, styles.viewInput]}>
        <TouchableOpacity style={styles.viewStatus}>
          <Text style={styles.textStatus}>Thành công</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewStatusError}>
          <Text style={styles.textStatusError}>Thất bại</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textLabel}>Thời gian</Text>
      <View style={[styles.viewInput, {flexDirection: 'row'}]}>
        <View style={{flex: 1, marginRight: 10}}>
          <TextInputPress
            valueInput={t('Từ ngày')}
            iconInput={iconInput}
            sizeIcon={15}
            isDatePicker
          />
        </View>
        <View style={{flex: 1}}>
          <TextInputPress
            valueInput={t('06/01/2022')}
            iconInput={iconInput}
            sizeIcon={15}
          />
        </View>
      </View>
      <Text style={styles.textLabel}>Tài sản</Text>
      <View>
        <TextInputPress valueInput={t('---')} />
      </View>
      <View style={styles.viewInputSubmit}>
        <ButtonDepositWithdraw
          label="Hủy bỏ"
          buttonStyle={{
            backgroundColor: colorsTheme.whisper,
            paddingVertical: 15,
          }}
          titleStyle={{color: colorsTheme.mirage}}
        />
        <ButtonDepositWithdraw label="Áp dụng" />
      </View>
    </View>
  );
};

export default Filter;
