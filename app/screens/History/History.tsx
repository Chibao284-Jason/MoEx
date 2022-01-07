import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {View, FlatList, Button} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
import HeaderComponent from '@components/HeaderComponent/HeaderComponent';
import {useSelector} from 'react-redux';
import {IThemeState} from '@models/reducers/theme';
import TagFilter from '@components/TagComponent/TagFilter';
import CardHistory from '@components/CardHistoryComponent/CardHistory';
import {screenName} from '@navigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import Filter from '@components/FilterComponent/Filter';
interface HistoryProps {}

interface IState {
  themeReducer: IThemeState;
}

const History = (props: HistoryProps) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const styles = style(colors as ThemeColors);
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const refRBSheet = useRef<any>();
  const dataFilter = [
    {
      id: 1,
      label: t('Tất cả'),
    },
    {
      id: 2,
      label: t('Nạp/Rút On-Chain'),
    },
    {
      id: 3,
      label: t('Giao dịch'),
    },
    {
      id: 4,
      label: t('Chuyển ví'),
    },
    {
      id: 5,
      label: t('Quy đổi'),
    },
    {
      id: 6,
      label: t('Nhận lãi'),
    },
    {
      id: 7,
      label: t('Hoa hồng giao dịch'),
    },
  ];
  return (
    <View style={styles.containerHistory}>
      <HeaderComponent
        isButtonLeft
        headerLeft={() => navigation.goBack()}
        title="Lịch sử giao dịch"
        isButtonRight
        headerRight={() => refRBSheet.current.open()}
        iconRight={
          isDark
            ? require('../../assets/img/filterHistoryWhite.png')
            : require('../../assets/img/filterHistory.png')
        }
        styleHeader={{paddingHorizontal: 0}}
      />
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataFilter}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => {
            return <TagFilter key={`${item.id}`} label={item.label} />;
          }}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 9]}
        contentContainerStyle={{marginTop: 15}}
        renderItem={item => {
          return (
            <CardHistory
              onPressHistory={() =>
                navigation.navigate(screenName.HISTORY_DETAIL as never)
              }
            />
          );
        }}
      />

      <RBSheet
        closeOnPressMask={true}
        ref={refRBSheet}
        closeOnDragDown={true}
        height={700}
        customStyles={{
          wrapper: styles.bottomSheetWrapper,
          container: styles.bottomSheetContainer,
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <Filter />
      </RBSheet>
    </View>
  );
};

export default History;
