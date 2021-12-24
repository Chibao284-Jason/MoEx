import {changeLanguage} from '@store/actions/changeLanguageActions';
import i18n from 'app/i18n/i18n';
import React, {useEffect, useState} from 'react';
import {Alert, Modal, Text, View, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {style} from './styles';

interface IModalTopToCenterProps {
  isShowModal: boolean;
  onCloseModal: () => void;
}
const ModalTopToCenter = (props: IModalTopToCenterProps) => {
  const {isShowModal, onCloseModal} = props;
  const [modalVisible, setModalVisible] = useState(isShowModal);
  useEffect(() => {
    setModalVisible(isShowModal);
  }, [isShowModal]);
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const onChangeLanguage = (lang?: string) => {
    let langTemp = lang ? lang : i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(langTemp);
    dispatch(changeLanguage(langTemp));
    onCloseModal();
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.centeredViewModal}
          onPress={onCloseModal}>
          <View style={styles.modalView}>
            <View style={{justifyContent: 'flex-start'}}>
              <Text style={styles.modalText}>Ngôn ngữ</Text>
              <Text style={styles.modalTextDesc}>
                Vui lòng chọn ngôn ngữ cho tài khoản của bạn
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.button]}
              onPress={() => onChangeLanguage('vi')}>
              <AutoHeightImage
                source={require('../../assets/img/vietnamWave.png')}
                width={30}
              />
              <Text style={styles.textStyle}>Tiếng Việt</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => onChangeLanguage('en')}>
              <AutoHeightImage
                source={require('../../assets/img/usaWave.png')}
                width={30}
              />
              <Text style={styles.textStyle}>English</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalTopToCenter;
