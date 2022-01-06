import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface TagFilterProps {
  key?: string;
  label: string;
}

const TagFilter = (props: TagFilterProps) => {
  const {key, label} = props;
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const styles = style(colors as ThemeColors);
  const [activeTag, setActiveTag] = useState(false);
  return (
    <TouchableOpacity
      key={key}
      style={styles.viewFilter(activeTag)}
      onPress={() => {
        setActiveTag(!activeTag);
      }}>
      <Text style={styles.textFilter(activeTag)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TagFilter;
