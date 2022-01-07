import {colorsTheme} from '@config';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageSourcePropType,
  Platform,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useTheme} from 'react-native-paper';
import {style} from './styles';
import DateTimePicker, {
  AndroidMode,
} from '@react-native-community/datetimepicker';
interface TextInputPressProps {
  valueInput: string | any;
  iconInput?: ImageSourcePropType;
  sizeIcon?: number;
  onPressInput?: () => void;
  isDatePicker?: boolean;
}

const TextInputPress = (props: TextInputPressProps) => {
  const {
    valueInput,
    iconInput,
    sizeIcon = 25,
    onPressInput,
    isDatePicker,
  } = props;
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  const {t} = useTranslation();

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<AndroidMode>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: AndroidMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <TouchableOpacity onPress={onPressInput}>
      <View style={styles.containerTextInputPress}>
        {!isDatePicker ? (
          <Text style={styles.textInputPress}>{valueInput}</Text>
        ) : (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode={mode}
              display="default"
              date={new Date()}
              onChange={onChange}
              style={{backgroundColor: 'grey'}}
            />
          </View>
        )}
        <AutoHeightImage
          source={
            iconInput ? iconInput : require('../../assets/img/arrowDown.png')
          }
          width={sizeIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TextInputPress;
