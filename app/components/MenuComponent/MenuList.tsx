import React, {useState} from 'react';
import {Text, View, Switch, SafeAreaView, TouchableOpacity} from 'react-native';
import AvatarMenu from '@components/AvatarComponent/AvatarMenu';
import CardIntroduce from '@components/CardIntroduceComponent/CardIntroduce';
import TitleComponent from '@components/TitleComponent/TitleComponent';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {style} from './styles';
import MenuButton from './MenuButton';
import ThemeController from '@components/ThemeController';
import {LineLarge} from '@components/LineComponent/LineLarge';
import AutoHeightImage from 'react-native-auto-height-image';
import {colorsTheme} from '@config';
interface MenuListProps {}

const MenuList = (props: MenuListProps) => {
  const [switchOn, setSwitch] = useState(false);
  const {colors} = useTheme();
  const {t} = useTranslation();
  const styles = style(colors as ThemeColors);
  const onPressAuthentication = () => {
    setSwitch(!switchOn);
  };
  return (
    <SafeAreaView>
      <AvatarMenu />
      <CardIntroduce />
      <TitleComponent title={t('ACCOUNT')} titleStyles={styles.textTitle} />
      <MenuButton
        label={t('PROFILE')}
        iconLeft={require('../../assets/img/user.png')}
      />
      <MenuButton
        label={t('CHANGE_PASSWORD')}
        iconLeft={require('../../assets/img/lock.png')}
      />
      <MenuButton
        label={t('PAYMENT_METHODS')}
        iconLeft={require('../../assets/img/payment.png')}
      />
      <MenuButton
        label={t('ACCOUNT_VERIFICATIONS')}
        iconLeft={require('../../assets/img/verify.png')}
      />
      {/* <MenuButton
        label={t('THEME')}
        iconLeft={require('../../assets/img/theme.png')}
      /> */}
      <MenuButton
        label={t('BASE_COIN')}
        iconRight={<Text style={styles.textBaseCoin}>VNDC</Text>}
        iconLeft={require('../../assets/img/dollar.png')}
      />
      <LineLarge sizeLine={1} />
      <TitleComponent title={t('SECURITY')} titleStyles={styles.textTitle} />

      <MenuButton
        label={t('VERIFY_ID')}
        iconRight={
          <Switch
            value={switchOn}
            onChange={() => onPressAuthentication()}
            trackColor={{
              false: colorsTheme.manatee,
              true: colorsTheme.persianBlue,
            }}
          />
        }
        iconLeft={require('../../assets/img/faceID.png')}
        isIconRight={false}
      />
      <MenuButton
        label={t('AUTHENTICATION')}
        iconLeft={require('../../assets/img/shield.png')}
      />
      <MenuButton
        label={t('DEVICES_MANAGEMENT')}
        iconLeft={require('../../assets/img/monitor.png')}
      />
      <LineLarge sizeLine={1} />
      <TitleComponent title={t('ACCOUNT')} titleStyles={styles.textTitle} />
      <MenuButton
        label={t('REFERRAL')}
        iconLeft={require('../../assets/img/userAdd.png')}
      />
      <MenuButton
        label={t('PARTNER')}
        iconLeft={require('../../assets/img/useFriend.png')}
      />
      <MenuButton
        label={t('ABOUT_US')}
        iconLeft={require('../../assets/img/about.png')}
      />
      <MenuButton
        label={t('FAQ')}
        iconLeft={require('../../assets/img/question.png')}
      />
      <MenuButton
        label={t('CREATE_TICKET')}
        iconLeft={require('../../assets/img/ticket.png')}
      />
      <MenuButton
        label={t('HOTLINE')}
        iconLeft={require('../../assets/img/headset.png')}
        iconRight={<Text style={styles.textBaseCoin}>08 999 36524</Text>}
      />
      <MenuButton
        label={t('COMMUNITY')}
        iconLeft={require('../../assets/img/share.png')}
      />
      <MenuButton
        label={t('LANGUAGE')}
        iconLeft={require('../../assets/img/translate.png')}
        iconRight={
          <AutoHeightImage
            source={require('../../assets/img/vietnam.png')}
            width={25}
          />
        }
      />
      <View style={styles.viewLogOut}>
        <TouchableOpacity style={styles.buttonLogOut}>
          <Text style={styles.textLogout}>Đăng xuất</Text>
        </TouchableOpacity>
        <Text style={styles.textVersion}>
          Version v1.0.2 - copyright SOC 2021
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MenuList;
